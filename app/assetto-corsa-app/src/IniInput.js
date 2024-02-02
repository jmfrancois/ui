import React from 'react'
import DATA from './data.json'
import styles from './IniInput.module.css'

function getProposal(section, id, value) {
	if (id === 'MODEL') {
		return Object.keys(DATA.skins).filter(
			(v) => v.includes(value) && v !== value
		)
	} else if (id === 'SKIN') {
		return (DATA.skins[section.MODEL] || []).filter(
			(v) => v.includes(value) && v !== value
		)
	} else if (id === 'TRACK') {
		return DATA.tracks.filter((v) => v.includes(value) && v !== value)
	} else if (id === 'CONFIG_TRACK' && DATA.layouts[section.TRACK]) {
		return DATA.layouts[section.TRACK].filter(
			(v) => v.includes(value) && v !== value
		)
	}
	return []
}

export function IniInput(props) {
	const iniValue = props.config[props.section][props.id]
	const [dirty, setDirty] = React.useState(false)
	const [value, setValue] = React.useState(iniValue)
	const help = `${props.id}Help`
	function save(forcedValue) {
		return fetch(`/api/v1/${props.iniFile}?preset=${props.preset}`, {
			method: 'PATCH',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				section: props.section,
				id: props.id,
				value: forcedValue === undefined ? value : forcedValue
			})
		})
	}
	React.useEffect(() => {
		setValue(iniValue)
	}, [iniValue])
	return (
		<div className={`mb-3 ${styles.wrapper}`}>
			{!props.hideLabel && (
				<label htmlFor={props.id} className="form-label">
					[{props.section}] {props.name || props.id}
				</label>
			)}
			<input
				type={props.type}
				className="form-control"
				id={props.id}
				aria-describedby={help}
				value={value}
				onFocus={() => setDirty(true)}
				onBlur={() =>
					setTimeout(() => {
						setDirty(false)
					}, 200)
				}
				onChange={(e) => {
					console.log('onChange')
					setValue(e.target.value)
					save(e.target.value).then(() => {
						if (props.onChange) {
							props.onChange()
						}
					})
				}}
			/>
			<ul className={`${styles.suggestions}`}>
				{dirty &&
					getProposal(props.config[props.section], props.id, value).map(
						(proposal) => (
							<li>
								<a
									className="dropdown-item"
									href={`#/proposal/${proposal}`}
									onClick={(e) => {
										e.preventDefault()
										e.stopPropagation()
										setValue(proposal)
										save(proposal).then(() => {
											if (props.onChange) {
												props.onChange()
											}
										})
									}}
								>
									{proposal}
								</a>
							</li>
						)
					)}
			</ul>
			<div id={help} className="form-text">
				{props.helpText}
			</div>
		</div>
	)
}

IniInput.defaultProps = {
	type: 'text',
	iniFile: 'server_cfg'
}
