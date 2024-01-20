#! /usr/bin/env ts-node
// I want a script to copy all files from */*/public to public/

import * as fs from "fs";
import * as path from "path";
import * as glob from "glob";

const publicDirs = glob.sync("*/**/demo");

publicDirs.forEach((dir) => {
	const source = path.resolve(dir);
	const parent = path.dirname(source).split("/").slice(-1)[0];
	console.log(parent);
	if (fs.existsSync(source)) {
		const dest = path.resolve(process.cwd(), "public", parent);
		fs.mkdirSync(dest, { recursive: true });
		fs.cpSync(source, dest, { recursive: true });
	}
});
