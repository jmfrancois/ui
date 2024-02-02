const fs = require('fs/promises')
const path = require('path')

const DEFAULT_PRESET = 'CURRENT'

async function getPreset(cwd) {
	let presets = [DEFAULT_PRESET]
	try {
		const list = await fs.readdir(path.join(cwd, 'presets'))
		presets = presets.concat(list)
	} catch (e) {
		console.error(e)
	}
	return presets
}

function getPresetFromRequest(req) {
	if (req.query.preset) {
		if (Array.isArray(req.query.preset)) {
			return req.query.preset[0]
		}
		return req.query.preset
	}
	return undefined
}

// getPreset(path.join(process.cwd(), '..', '..'));

module.exports = {
	getPreset,
	getPresetFromRequest
}
