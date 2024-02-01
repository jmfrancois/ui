import { Calc } from "./Form";
import { Header } from "./Header";
import style from "./App.module.css";

export function App() {
	return (
		<div className={style.container}>
			<Header />
			<Calc />
		</div>
	);
}
