const express = require("express");

function configure(app) {
	app.use(express.json());
	// app.use(bodyParser.json()); // for parsing application/json
	app.use(express.static("../assetto-corsa-app/build"));
}

function create() {
	return express();
}

function start(app, port) {
	app.listen(port, () => {
		console.log(`listen on http://localhost:${port}`);
	});
}

module.exports = {
	create,
	configure,
	start,
};
