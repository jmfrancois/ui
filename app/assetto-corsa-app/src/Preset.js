import React from 'react';
import { DEFAULT_PRESET } from './constants';

const STORAGE_KEY = 'currentPreset';

export function getCurrentPreset() {
	return sessionStorage.getItem(STORAGE_KEY) || DEFAULT_PRESET;
}

export function Preset(props) {
	const [presets, setPresets] = React.useState([]);
	React.useEffect(() => {
		fetch('/api/v1/preset')
			.then(resp => {
				if (resp.ok) {
					return resp.json();
				} else {
					return Promise.resolve([]);
				}
			})
			.then(resp => {
				setPresets(resp);
			});
	}, []);
	const currentPreset = getCurrentPreset();
	function onPresetChange(e) {
		sessionStorage.setItem(STORAGE_KEY, e.target.value);
	}
	return (
		<form className="text-start">
			<div className="mb-3">
				<label htmlFor="preset" className="form-label">
					Preset
				</label>
				<select
					className="form-select"
					aria-label="Preset selection"
					onChange={onPresetChange}
					value={currentPreset}
				>
					{presets.map(preset => (
						<option key={preset}>{preset}</option>
					))}
				</select>
				<div id="presetHelp" className="form-text">
					The configuration preset help you to switch from one configuration to an other
				</div>
			</div>
		</form>
	);
}
