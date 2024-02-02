// make http server using nodejs to serve public folder on 8080

import * as http from 'http'
import * as path from 'path'
import * as fs from 'fs'

const port = 8080

const server = http.createServer((req, res) => {
	const parsedUrl = new URL(req.url || '', `http://${req.headers.host}`)

	if (!parsedUrl.pathname?.startsWith('/ui')) {
		//redirect to /ui
		res.writeHead(302, { Location: '/ui' + parsedUrl.pathname })
		res.end()
		return
	}
	const pathname = (parsedUrl.pathname || '').replace('/ui', '')
	const filename = path.join(process.cwd(), 'public', pathname)
	console.log(filename.replace(process.cwd(), ''))
	fs.readFile(filename, (err, data) => {
		if (err) {
			console.error(err)
			res.writeHead(404, { 'Content-Type': 'text/plain' })
			res.write('404 Not Found')
			res.end()
		} else {
			if (pathname.endsWith('.js')) {
				res.writeHead(200, { 'Content-Type': 'text/javascript' })
			} else if (pathname.endsWith('.css')) {
				res.writeHead(200, { 'Content-Type': 'text/css' })
			} else {
				res.writeHead(200)
			}
			res.write(data)
			res.end()
		}
	})
})

server.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})
