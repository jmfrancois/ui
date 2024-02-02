const TEMPLATE = `MODEL=
SKIN=
SPECTATOR_MODE=0
DRIVERNAME=
TEAM=
GUID=
BALLAST=0
RESTRICTOR=0
`

export function addCarInEntryList(entryList, preset) {
	return fetch(`/api/v1/entry_list?preset=${preset}`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			section: `CAR_${Object.keys(entryList).length}`,
			value: TEMPLATE
		})
	})
}

export function deleteCarInEntryList(id, preset) {
	return fetch(`/api/v1/entry_list/${id}?preset=${preset}`, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	})
}

export function getEntryList(preset) {
	return fetch(`/api/v1/entry_list?preset=${preset}`).then((resp) => {
		if (resp.ok) {
			return resp.json()
		}
		Promise.resolve([])
	})
}
