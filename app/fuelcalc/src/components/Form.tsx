import { useState, useEffect } from 'preact/hooks'

class State {
	laptimeM: number
	laptimeS: number
	raceLength: number
	literPerLap: number
	maxTank: number
	onChange: () => void
	laps?: number
	litersTotal?: number
	pitstopRequired?: number
	possibleLapsOnTank?: number
	setState?: State

	constructor(prev?: State) {
		this.laptimeM = 2
		this.laptimeS = 10
		this.raceLength = 20 //minutes
		this.literPerLap = 2.6
		this.maxTank = 105 // capacity
		this.onChange = () => {}
		if (prev) {
			this.setState = prev.setState
			this.laptimeM = prev.laptimeM
			this.laptimeS = prev.laptimeS
			this.raceLength = prev.raceLength
			this.literPerLap = prev.literPerLap
			this.maxTank = prev.maxTank
			this.onChange = prev.onChange
		}

		this.compute()
	}

	set(attr, value) {
		let v = value
		if (typeof value === 'string') {
			if (value.indexOf('.') !== -1) {
				v = parseFloat(value)
			} else {
				v = parseInt(value, 10)
			}
		}
		console.log(`set attr ${attr} ${value} => ${v}`)
		if (!isNaN(v)) {
			this[attr] = v
			this.compute()
			this.onChange()
		} else {
			console.error(`Try to set ${attr} to a value which is not a number`)
		}
	}
	compute() {
		this.laps =
			(this.raceLength * 60) / (this.laptimeM * 60 + this.laptimeS + 0.5) + 1
		this.litersTotal = this.laps * this.literPerLap + 1.5
		this.pitstopRequired = this.litersTotal / this.maxTank
		this.possibleLapsOnTank = this.maxTank / this.literPerLap - 0.5
	}
}

function useCalc() {
	const [state, setState] = useState<State>(new State())
	useEffect(() => {
		state.onChange = () => setState(new State(state))
	}, [state])
	return state
}

function format(n: number) {
	return Math.floor(n)
}

function onChange(event, state) {
	console.log(state)
	state.set(event.target.name, event.target.value)
}

export const Calc = () => {
	const state = useCalc()
	return (
		<form className="max-w  grid grid-cols-1 gap-2 bg-neutral-200/75 px-2 sm:grid-cols-2 dark:bg-neutral-800/75">
			<div className="">
				<div className="">
					<label className="text-m mb-2 block font-medium text-gray-900 dark:text-white">
						Lap time (minutes / seconds)
					</label>
					<div className="mb-2 grid grid-cols-2 gap-2">
						<input
							type="number"
							className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
							value={state.laptimeM}
							autoFocus
							name="laptimeM"
							onChange={(e) => onChange(e, state)}
						/>
						<input
							type="number"
							className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
							value={state.laptimeS}
							name="laptimeS"
							onChange={(e) => onChange(e, state)}
						/>
					</div>
				</div>

				<div className="mb-2 flex flex-col">
					<label className="text-m mb-2 block font-medium text-gray-900 dark:text-white">
						Race length (minutes)
					</label>
					<input
						type="number"
						className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
						value={state.raceLength}
						name="raceLength"
						onChange={(e) => onChange(e, state)}
					/>
				</div>
				<div className="mb-2 flex flex-col">
					<label className="text-m mb-2 block font-medium text-gray-900 dark:text-white">
						Consumption (liters/lap)
					</label>
					<input
						type="number"
						className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
						value={state.literPerLap}
						name="literPerLap"
						onChange={(e) => onChange(e, state)}
					/>
				</div>
				<div className="mb-2 flex flex-col">
					<label className="text-m mb-2 block font-medium text-gray-900 dark:text-white">
						Max tank capacity (liters)
					</label>
					<input
						type="number"
						className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
						value={state.maxTank}
						name="maxTank"
						onChange={(e) => onChange(e, state)}
					/>
				</div>
			</div>
			<div className="">
				<div className="mb-2 flex flex-col">
					<label className="text-m mb-2 block font-medium text-gray-900 dark:text-white">
						Total fuel needed (liters)
					</label>
					<input
						type="number"
						className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
						value={format(state.litersTotal)}
						name="litersTotal"
						readOnly
					/>
				</div>
				<div className="mb-2 flex flex-col">
					<label className="text-m mb-2 block font-medium text-gray-900 dark:text-white">
						Total Laps (with formation lap)
					</label>
					<input
						type="number"
						className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
						value={format(state.laps)}
						readOnly
					/>
				</div>
				<div className="mb-2 flex flex-col">
					<label className="text-m mb-2 block font-medium text-gray-900 dark:text-white">
						Number of pit stop required
					</label>
					<input
						type="number"
						className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
						value={format(state.pitstopRequired)}
						readOnly
					/>
				</div>
				<div className="mb-2 flex flex-col">
					<label className="text-m mb-2 block font-medium text-gray-900 dark:text-white">
						Possible laps on tank
					</label>
					<input
						type="number"
						className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
						value={format(state.possibleLapsOnTank)}
						readOnly
					/>
				</div>
			</div>
		</form>
	)
}
