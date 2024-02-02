const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				accent: {
					100: "#FA9D8C",
					200: "#F77059",
					300: "#FA4524",
					400: "#FF2800",
					500: "#A5270D",
					600: "#8F210C",
					800: "#781A08",
				},
			},
		},
		colors: {
			accent: "#ff2800",
			neutral: colors.gray,
		},
	},
	plugins: [],
};
