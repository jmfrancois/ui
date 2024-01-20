import * as fs from "fs";
import * as path from "path";
import * as glob from "glob";

const publicDirs = glob.sync("*/**/demo");

publicDirs.forEach((dir: string) => {
	const source = path.resolve(dir);
	const parent = path.dirname(source).split("/").slice(-1)[0];
	console.log(parent);
	if (fs.existsSync(source)) {
		const dest = path.resolve(process.cwd(), "public", parent);
		fs.mkdirSync(dest, { recursive: true });
		fs.cpSync(source, dest, { recursive: true });
		fs.rmSync(source, { recursive: true });
	}
});

fs.cpSync("app/home/src", "public", { recursive: true });
