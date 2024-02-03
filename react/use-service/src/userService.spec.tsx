/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as TestRenderer from 'react-test-renderer'
import { useService, registerService } from './useService'
import { Factory, NotifyFn } from './types'

const { act } = TestRenderer

describe('useService.register', () => {
	it('should update component state', () => {
		type MyServiceType = {
			count: number
			notify: NotifyFn
		}
		let instance: MyServiceType | undefined
		function MyService(notify: NotifyFn) {
			// eslint-disable-next-line @typescript-eslint/no-this-alias
			instance = this
			this.notify = notify
			this.count = 0
		}
		registerService('My', MyService as Factory)
		expect(instance).toBeUndefined()

		function Component() {
			const service = useService<MyServiceType>('My')
			return <p>{service.count}</p>
		}
		const wrapper = TestRenderer.create(<Component />)
		if (!instance) {
			throw new Error('instance is undefined')
		}

		expect(typeof instance).toBe('object')
		expect(instance.count).toBe(0)
		const structure = wrapper.toJSON()
		if (!structure) throw new Error('structure is null')
		// @ts-ignore
		expect(structure.children[0]).toBe('0')

		act(() => {
			if (!instance) {
				throw new Error('instance is undefined')
			}
			// now lets update the service
			instance.count = 1
			instance.notify()
		})
		// @ts-ignore
		expect(wrapper.toJSON().children[0]).toBe('1')
	})
})
