import React from 'react';
import { addCarInEntryList, deleteCarInEntryList, getEntryList } from './api';
import { IniInput } from './IniInput';
import { getCurrentPreset } from './Preset';

export function EntryList(props) {
	const [preset, setPreset] = React.useState(getCurrentPreset());
	const [entryList, setEntryList] = React.useState({});
	function refreshEntryList() {
		getEntryList(preset).then(resp => {
			setEntryList(resp);
		});
	}
	React.useEffect(() => {
		const cancel = setInterval(() => {
			const newPreset = getCurrentPreset();
			if (preset !== newPreset) {
				setPreset(newPreset);
			}
		}, 200);
		refreshEntryList();
		return () => {
			clearInterval(cancel);
		};
	}, []);

	function onAdd() {
		addCarInEntryList(entryList, preset).finally(() => refreshEntryList());
	}

	function onDelete(section) {
		deleteCarInEntryList(section, preset).finally(() => refreshEntryList());
	}
	return (
		<>
			<form className="text-start">
				<table className="table">
					<thead>
						<tr>
							<th>Action</th>
							<th>Car</th>
							<th>Skin</th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(entryList).map(section => (
							<React.Fragment key={section}>
								<tr>
									<td>
										<button
											type="button"
											className="btn btn-danger"
											onClick={() => onDelete(section)}
										>
											Delete
										</button>
									</td>
									<td>
										<IniInput
											preset={preset}
											iniFile="entry_list"
											config={entryList}
											section={section}
											name="MODEL"
											id="MODEL"
											hideLabel
											onChange={() => {
												refreshEntryList();
											}}
										/>
									</td>
									<td>
										<IniInput
											preset={preset}
											iniFile="entry_list"
											config={entryList}
											section={section}
											name="SKIN"
											id="SKIN"
											hideLabel
										/>
									</td>
								</tr>
							</React.Fragment>
						))}
						<tr>
							<td>
								<button
									type="button"
									className="btn btn-primary"
									onClick={() => {
										onAdd();
									}}
								>
									Add
								</button>
							</td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</form>
		</>
	);
}
