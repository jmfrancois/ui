// export API to manage server_cfg.ini
const ini = require('./ini')
const path = require('path')

const ERROR = {}

function getIniPath(cwd, preset, fname = 'server_cfg.ini') {
	return path.join(
		cwd,
		preset !== 'CURRENT' ? `presets/${preset}` : 'cfg',
		fname
	)
}

function parseIniFile(cwd, preset, fname = 'server_cfg.ini') {
	const cfgPath = getIniPath(cwd, preset, fname)
	try {
		return ini.parse(cfgPath)
	} catch (e) {
		console.error(e)
		return ERROR
	}
}

function setValue(cwd, preset, fname = 'server_cfg.ini', section, key, value) {
	const cfgPath = getIniPath(cwd, preset, fname)
	console.log(
		`server_cfg.setValue(${cwd}, ${preset}, ${section}, ${key}, ${value}`
	)

	return ini.setValue(cfgPath, section, key, value)
}

function setSection(cwd, preset, fname = 'server_cfg.ini', section, value) {
	console.log(`server_cfg.setSection(${cwd}, ${preset}, ${fname}, ${section}`)
	const cfgPath = getIniPath(cwd, preset, fname)
	return parseIniFile(cwd, preset, fname).then((config) => {
		if (config[section]) {
			console.log('replace the section', section)
		} else {
			config[section] = {}
		}
		value.split('\n').reduce((acc, line) => {
			const [key, val] = line.split('=')
			acc[key] = val
			return acc
		}, config[section])
		return ini.save(cfgPath, config)
	})
}

function deleteSection(cwd, preset, fname, section) {
	const cfgPath = getIniPath(cwd, preset, fname)
	return parseIniFile(cwd, preset, fname).then((config) => {
		if (config[section]) {
			console.log('delete the section', section)
			delete config[section]
			// let's keep order of CAR_
			if (section.startsWith('CAR_')) {
				const newConfig = Object.keys(config).reduce((acc, key, index) => {
					acc[`CAR_${index}`] = config[key]
					return acc
				}, {})
				return ini.save(cfgPath, newConfig)
			}
			return ini.save(cfgPath, config)
		}
		return Promise.resolve()
	})
}

module.exports = {
	parseIniFile,
	setValue,
	setSection,
	deleteSection
}
