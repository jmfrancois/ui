import style from "./Header.module.css";

export const Header = () => (
	<header
		class={`${style.header} shadow flex flex-row justify-between overflow-auto bg-accent-400 h-12`}
	>
		<h1 className="text-3xl font-bold px-4 my-auto leading-10">
			Fuel Calculator
		</h1>
		<nav class="leading-10 my-auto px-4 flex">
			<a href="../" class="block hover:bg-accent-600">
				Home
			</a>
		</nav>
	</header>
);
