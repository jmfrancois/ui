/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { IniInput } from './IniInput'
import { getCurrentPreset } from './Preset'

export function RaceConfig(props) {
	const [preset, setPreset] = React.useState(getCurrentPreset())
	React.useEffect(() => {
		const cancel = setInterval(() => {
			const newPreset = getCurrentPreset()
			if (preset !== newPreset) {
				setPreset(newPreset)
			}
		}, 200)
		return () => {
			clearInterval(cancel)
		}
	}, [])
	const [iniConfig, setIniConfig] = React.useState()
	React.useEffect(() => {
		fetch(`/api/v1/server_cfg?preset=${preset}`)
			.then((resp) => {
				if (resp.ok) {
					return resp.json()
				}
			})
			.then((resp) => {
				setIniConfig(resp)
			})
	}, [preset])
	if (!iniConfig) {
		return null
	}
	return (
		<form className="text-start">
			<IniInput
				preset={preset}
				config={iniConfig}
				section="QUALIFY"
				id="TIME"
				type="number"
			/>
			<IniInput
				preset={preset}
				config={iniConfig}
				section="RACE"
				id="LAPS"
				type="number"
			/>
		</form>
	)
}
