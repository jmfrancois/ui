#!/usr/bin/env node
const path = require('path')
const acServer = require('./acServer')
const { start, configure, create } = require('./app')
const { getIPV4Addresses } = require('./network')
const { getPreset, getPresetFromRequest } = require('./preset')
const server_cfg = require('./server_cfg')

const program = process.argv.reduce((acc, key) => {
	if (key.startsWith('--')) {
		const split = key.split('=')
		const optKey = split[0].replace('--', '')
		acc[optKey] = split[1] || true
	}
	if (key.startsWith('-')) {
		const optKey = key.replace('-', '')
		acc[optKey] = true
	}
	return acc
}, {})

const CWD = path.join(process.cwd(), program.server)

const app = create()
app.locals.assettoServerRoot = CWD
configure(app)
app.get('/api/v1/ip', (req, res) => {
	const results = getIPV4Addresses()
	res.send(results)
})

app.get('/api/v1/preset', async (req, res) => {
	const presets = await getPreset(CWD)
	res.send(presets)
})

app.get('/api/v1/server_cfg', (req, res) => {
	const preset = getPresetFromRequest(req)
	server_cfg.parseIniFile(CWD, preset, 'server_cfg.ini').then((config) => {
		res.send(config)
	})
})
app.patch('/api/v1/server_cfg', (req, res) => {
	const preset = getPresetFromRequest(req)
	console.log(req.body)
	// ensure not sensitive change (admin password)
	if (req.body.id.includes('password')) {
		res.status(400).send({ code: 100 }) // sensitive info
	}
	server_cfg
		.setValue(
			CWD,
			preset,
			'server_cfg.ini',
			req.body.section,
			req.body.id,
			req.body.value
		)
		.then(() => {
			res.send('OK')
		})
		.catch((e) => {
			res.status(500).send(e)
		})
})

function updateCarsFromEntrylist(preset, newCar) {
	return server_cfg
		.parseIniFile(CWD, preset, 'entry_list.ini')
		.then((config) => {
			const maxClients = Object.keys(config).length
			const cars = Object.keys(config)
				.reduce(
					(acc, key) => {
						const car = config[key].MODEL
						console.log(car, key, config)
						if (!acc.includes(car)) {
							acc.push(car)
						}
						return acc
					},
					[newCar]
				)
				.filter(Boolean)
				.join(';')
			return server_cfg
				.setValue(CWD, preset, 'server_cfg.ini', 'SERVER', 'CARS', cars)
				.then(() =>
					server_cfg.setValue(
						CWD,
						preset,
						'server_cfg.ini',
						'SERVER',
						'MAX_CLIENTS',
						maxClients
					)
				)
		})
}

app.get('/api/v1/entry_list', (req, res) => {
	const preset = getPresetFromRequest(req)
	server_cfg.parseIniFile(CWD, preset, 'entry_list.ini').then((config) => {
		res.send(config)
	})
})

app.delete('/api/v1/entry_list/:id', (req, res) => {
	const preset = getPresetFromRequest(req)
	server_cfg
		.deleteSection(CWD, preset, 'entry_list.ini', req.params.id)
		.then(() => {
			updateCarsFromEntrylist(preset)
			res.send('')
		})
		.catch((e) => {
			console.error(e)
			res.status(500).send(e)
		})
})

app.post('/api/v1/entry_list', (req, res) => {
	const preset = getPresetFromRequest(req)
	server_cfg
		.setSection(CWD, preset, 'entry_list.ini', req.body.section, req.body.value)
		.then(() => {
			res.send('OK')
		})
		.catch((e) => {
			console.error(e)
			res.status(500).send(e)
		})
})

app.patch('/api/v1/entry_list', (req, res) => {
	const preset = getPresetFromRequest(req)
	server_cfg
		.setValue(
			CWD,
			preset,
			'entry_list.ini',
			req.body.section,
			req.body.id,
			req.body.value
		)
		.then(() => {
			if (req.body.section.startsWith('CAR_') && req.body.id === 'MODEL') {
				return updateCarsFromEntrylist(preset, req.body.value)
			}
			return Promise.resolve()
		})
		.then(() => {
			res.send('OK')
		})
		.catch((e) => {
			res.status(500).send(e)
		})
})

app.post('/api/v1/server/start', (req, res) => {
	const status = acServer.status(app)
	if (status.pid === undefined) {
		acServer.start(CWD, app)
	}
	res.send('OK')
})
app.post('/api/v1/server/stop', (req, res) => {
	acServer.stop(app)
	res.send('OK')
})
app.get('/api/v1/server/status', (req, res) => {
	res.send(acServer.status(app))
})

start(app, program.port || 3000)
