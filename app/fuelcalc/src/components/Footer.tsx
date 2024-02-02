export function Footer() {
	return (
		<footer className="pb-8">
			<p>
				This website has been done for simracing. It provides a quick form to
				compute the needed fuel for a race. Fill your laptime, race length and
				consumption and you have and you will have the total fuel needed. It
				works great with{' '}
				<a
					href="https://assettocorsa.gg/assetto-corsa-competizione/"
					className="font-medium text-red-600 hover:underline dark:text-red-500"
				>
					assetto corsa competizione
				</a>
				.
			</p>
		</footer>
	)
}
