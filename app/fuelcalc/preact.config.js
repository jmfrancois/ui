export default (config) => {
	if (process.env.NODE_ENV !== "development") {
		console.log("### /fuelcalc dir");
		config.output.publicPath = "/fuelcalc";
	} else {
		console.log("### / dir");
		config.output.publicPath = "/ui/fuelcalc";
	}
	return config;
};
