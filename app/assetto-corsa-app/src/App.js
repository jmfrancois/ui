import './App.css'
import { EntryList } from './EntryList'
import { Preset } from './Preset'
import { RaceConfig } from './RaceConfig'
import { TrackConfig } from './TrackConfig'
import { ServerStatus } from './ServerStatus'

function App() {
	return (
		<div className="app container text-center">
			<div className="row main">
				<h1>Welcome to assetto corsa server manager</h1>
				<div className="col">
					<h2>Server</h2>
					<Preset />
					<ServerStatus />
				</div>
				<div className="col overflow-scroll">
					<h2>Track Config</h2>
					<TrackConfig />
				</div>
				<div className="col">
					<h2>Race Config</h2>
					<RaceConfig />
				</div>
			</div>
			<div className="row main">
				<EntryList />
			</div>
		</div>
	)
}

export default App
