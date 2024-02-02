import { Calc } from "./Form";
import { Header } from "./Header";
import { Footer } from "./Footer";
import style from "./App.module.css";

export function App() {
	return (
		<>
			<div className="">
				<Header />
				<Calc />
			</div>
			<Footer />
		</>
	);
}
