import { h } from "preact";

import Header from "./header";
import { Calc } from "./calc";

export default function App() {
	return (
		<div id="app" className="container">
			<link
				rel="stylesheet"
				href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
				integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
				crossorigin="anonymous"
			/>
			<Header />
			<Calc />
		</div>
	);
}
