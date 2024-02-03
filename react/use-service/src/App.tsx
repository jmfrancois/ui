/* eslint-disable react/prop-types */
// eslint-disable @typescript-eslint/no-explicit-any
import { useState, version } from 'react'
import { registerService, useService } from './useService'
import { Factory, NotifyFn, ServiceId } from './types'

type LogInfo = {
	info: (...args: string[]) => void
}

// services/log.js
function $log() {
	this.info = (...args: string[]) => console.info(...args)
}
$log.$id = '$log'
$log.dependencies = [] as ServiceId[]

type Count = {
	count: number
	increment: () => void
	decrement: () => void
}

// services/count.js
function $count(notify: NotifyFn, $log: LogInfo) {
	this.count = 0
	$log.info('create service#$count should be called only once')
	this.increment = () => {
		this.count += 1
		notify()
	}
	this.decrement = () => {
		this.count -= 1
		notify()
	}
	return this
}
$count.$id = 'count'
$count.dependencies = ['$log']

// index.js
registerService('$log', $log as Factory)
registerService('$count', $count)

type CounterProps = {
	id: string
}

// components/Counter
function Counter(props: CounterProps) {
	const $count = useService<Count>('$count')
	console.log('Counter.render()', props.id)

	return (
		<p id={props.id}>
			Count state value({props.id}): {$count.count}
		</p>
	)
}

// components/CountController
function CountController() {
	const $count = useService<Count>('$count')
	console.log('CountController.render()')

	return (
		<div>
			<button className="btn btn-secondary" onClick={() => $count.increment()}>
				+
			</button>
			<button className="btn btn-secondary" onClick={() => $count.decrement()}>
				-
			</button>
		</div>
	)
}

// App.js
function App() {
	console.log('App.render')
	const [show, setShow] = useState(true)
	return (
		<div className="App">
			React.version = {version}
			<Counter id="first" />
			<CountController />
			{show && <Counter id="second" />}
			<button className="btn btn-primary" onClick={() => setShow(!show)}>
				Toggle second Counter instance
			</button>
		</div>
	)
}

export default App
