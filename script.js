(function () {
	if (
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches
	) {
		// dark mode
		document.querySelector("a.twitter-timeline").dataset.theme = "dark";
	}
})();
