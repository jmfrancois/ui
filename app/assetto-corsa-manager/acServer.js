const { execFile } = require('child_process')

function execute(CWD, cmd) {
	const status = {}
	const child = execFile(cmd, { cwd: CWD })
	status.pid = child.pid
	child.stdout.on('data', (data) => {
		console.log(data)
	})
	child.stderr.on('data', (data) => {
		console.error(data)
	})
	child.on('close', (code) => {
		status.exitCode = code
		status.pid = undefined
	})
	return { child, status }
}

function start(cwd, app) {
	console.log('START')
	if (app.locals.assetto) {
		delete app.locals.assetto
	}
	app.locals.assetto = execute(cwd, './acServer')
}

function stop(app) {
	console.log('STOP')
	app.locals.assetto.child.kill('SIGTERM')
}

function status(app) {
	if (!app.locals.assetto) {
		return {}
	}
	if (!app.locals.assetto.status) {
		return {}
	}
	console.log(
		`isStarted pid: ${app.locals.assetto.status.pid}, exitCode: ${app.locals.assetto.status.exitCode}`
	)
	return app.locals.assetto.status
}

module.exports = {
	start,
	stop,
	status
}
