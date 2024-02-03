import { useEffect, useState } from 'react'
import {
	Factory,
	Service,
	ServiceId,
	StructuredFactory,
	onChange
} from './types'

const factories = new Map<ServiceId, StructuredFactory>() // hold a function service
const services = new Map<ServiceId, Service>() // hold an instance of a function service
const notifies = new Map<ServiceId, Set<onChange>>() // hold setState of component which use a service

function initService<T>(id: ServiceId): T {
	let instance = services.get(id)
	if (!instance) {
		const notify = () => {
			const listeners = notifies.get(id) || []
			listeners.forEach((callMe) => callMe(Object.assign({}, services.get(id))))
		}
		// this will call every setState to update each components
		const factory = factories.get(id)
		if (!factory) {
			throw new Error(`No service found with the id ${id}`)
		}
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		instance = new factory.fn(notify, ...factory.dependencies.map(initService))
		services.set(id, instance)
	}
	return instance
}

/**
 * useService let you get instance of a registred service
 * @param {string} id - the id of the service you want to get
 * @param {Object} options - to configure the behavior you want
 * @param {boolean} options.subscribe - set to false to not be notified of updates
 */
export function useService<T>(id: ServiceId, options = { subscribe: true }): T {
	const [, setState] = useState(services.get(id))
	useEffect(() => {
		return function cleanup() {
			const listeners = notifies.get(id)
			if (listeners && listeners.has(setState)) {
				listeners.delete(setState)
			}
		}
	}, [id])
	if (options.subscribe) {
		const listeners = notifies.get(id)
		if (listeners === undefined) {
			notifies.set(id, new Set([setState]))
		} else if (!listeners.has(setState)) {
			listeners.add(setState)
		}
	}
	return initService(id)
}

/**
 * registerService let you register a function and map it to an id.
 * @param {string|function} idOrFn - the id of the service you want to get or the function constructor identifed
 * @param {function} value - the function constructor of the service
 */
export function registerService(idOrFn: ServiceId | Factory, value?: Factory) {
	let id: ServiceId | undefined
	let fn: Factory | undefined
	if (typeof idOrFn === 'string') {
		id = idOrFn
		if (value) {
			fn = value
		} else {
			throw new Error('You must provide a function constructor for the service')
		}
	} else if (!value) {
		id = idOrFn.$id
		fn = idOrFn
	}

	if (id === undefined) {
		throw new Error('You must provide an id for the service')
	}
	if (factories.get(id)) {
		throw new Error(`A service is already registred under the key ${id}`)
	} else if (fn) {
		factories.set(id, {
			fn,
			dependencies: fn.dependencies || []
		})
	}
}

/**
 * low level use of service (in case you are not in a component)
 * @param {string} id - the id of the service you want
 */
export function getService(id: ServiceId) {
	return services.get(id)
}
