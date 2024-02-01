import style from "./Header.module.css";

export const Header = () => (
	<header class={style.header}>
		<h1>Fuel Calculator</h1>
		<nav>
			<a href="../">Home</a>
		</nav>
	</header>
);
