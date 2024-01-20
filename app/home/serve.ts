// ts-node http serve to publish src folder

import * as http from "http";
import * as path from "path";
import * as fs from "fs";

const port = 3000;
const server = http.createServer((req, res) => {
	const root = path.resolve(__dirname, "src");
	const parsedUrl = new URL(req.url || "", `http://${req.headers.host}`);
	const pathname = parsedUrl.pathname || "";
	const filename = path.join(root, pathname);
	console.log(filename.replace(process.cwd(), ""));
	fs.readFile(filename, (err, data) => {
		if (err) {
			console.error(err);
			res.writeHead(404, { "Content-Type": "text/plain" });
			res.write("404 Not Found");
			res.end();
		} else {
			if (pathname.endsWith(".js")) {
				res.writeHead(200, { "Content-Type": "text/javascript" });
			} else if (pathname.endsWith(".css")) {
				res.writeHead(200, { "Content-Type": "text/css" });
			} else {
				res.writeHead(200);
			}
			res.write(data);
			res.end();
		}
	});
});

server.listen(port, () => {
	console.log(`Server listening on port http://localhost:${port}`);
});
