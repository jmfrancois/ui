import React from 'react'

export function ServerStatus() {
	const [status, setStatus] = React.useState(false)
	const [ips, setIps] = React.useState([])
	const refreshStatus = () => {
		fetch('/api/v1/server/status')
			.then((resp) => {
				if (resp.ok) {
					return resp.json()
				}
			})
			.then((resp) => {
				setStatus(resp)
			})
	}
	React.useEffect(() => {
		fetch('/api/v1/ip')
			.then((resp) => {
				if (resp.ok) {
					return resp.json()
				}
			})
			.then((resp) => {
				setIps(resp)
			})
		refreshStatus()
	}, [])
	const start = () => {
		fetch('/api/v1/server/start', { method: 'POST' }).then(() => {
			refreshStatus()
		})
	}
	const stop = () => {
		fetch('/api/v1/server/stop', { method: 'POST' }).then(() => {
			refreshStatus()
		})
	}
	const message = status?.pid ? 'Running' : 'Stopped'
	return (
		<div className="text-start">
			<ul>
				{Object.keys(ips).map((ip) => (
					<li key={ip}>
						<a
							target="content-manager"
							rel="noopener noreferrer"
							href={`https://acstuff.ru/s/q:race/online/join?ip=${ip}&httpPort=8081`}
						>
							ouvrir dans Content Manager {ip}
						</a>
					</li>
				))}
			</ul>
			<p>Server status: {message}</p>
			<button
				type="button"
				onClick={() => start()}
				disabled={status.pid !== undefined}
				className="btn btn-primary"
			>
				Start
			</button>
			&nbsp;
			<button
				type="button"
				onClick={() => stop()}
				disabled={status.pid === undefined}
				className="btn btn-danger"
			>
				Stop
			</button>
		</div>
	)
}
