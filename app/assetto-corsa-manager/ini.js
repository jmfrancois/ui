const fs = require('fs/promises')

function parse(filePath) {
	return fs
		.readFile(filePath, { encoding: 'utf-8' })
		.then((body) => {
			const content = {}
			let section
			return body
				.toString()
				.split('\n')
				.reduce((acc, value) => {
					if (value.startsWith('[')) {
						section = value.replace('[', '').replace(']', '').replace('\r', '')
						acc[section] = {}
					} else if (value.includes('=')) {
						const [key, val] = value.split('=')
						acc[section][key] = val.replace('\r', '')
					}
					return acc
				}, content)
		})
		.catch((e) => {
			console.error(e)
		})
}

function save(filePath, content) {
	const lines = Object.keys(content).reduce((acc, section) => {
		acc.push(`[${section}]`)
		Object.keys(content[section]).reduce((bcc, key) => {
			bcc.push(`${key}=${content[section][key]}`)
			return bcc
		}, acc)
		return acc
	}, [])
	return fs.writeFile(filePath, lines.join('\n'), { encoding: 'utf-8' })
}

function setValue(filePath, section, key, value) {
	console.log('setValue', filePath, section, key, value)
	return parse(filePath).then((content) => {
		if (content[section][key] != value) {
			console.log('really set the value')
			content[section][key] = value
			return save(filePath, content)
		}
	})
}

module.exports = {
	parse,
	save,
	setValue
}
