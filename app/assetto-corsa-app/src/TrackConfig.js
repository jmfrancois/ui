import React from 'react';
import { IniInput } from './IniInput';
import { getCurrentPreset } from './Preset';

export function TrackConfig(props) {
	const [preset, setPreset] = React.useState(getCurrentPreset());
	React.useEffect(() => {
		const cancel = setInterval(() => {
			const newPreset = getCurrentPreset();
			if (preset !== newPreset) {
				setPreset(newPreset);
			}
		}, 200);
		return () => {
			clearInterval(cancel);
		};
	}, []);
	const [iniConfig, setIniConfig] = React.useState();
	React.useEffect(() => {
		fetch(`/api/v1/server_cfg?preset=${preset}`)
			.then(resp => {
				if (resp.ok) {
					return resp.json();
				}
			})
			.then(resp => {
				setIniConfig(resp);
			});
	}, [preset]);
	if (!iniConfig) {
		return null;
	}
	return (
		<form className="text-start">
			<IniInput
				preset={preset}
				config={iniConfig}
				section="SERVER"
				id="TRACK"
				name="Track"
				helpText="The configuration preset help you to switch from one configuration to an other"
			/>
			<IniInput
				preset={preset}
				config={iniConfig}
				section="SERVER"
				id="CONFIG_TRACK"
				name="Track layout"
				helpText="Name of the layout, empty if only one"
			/>
		</form>
	);
}
