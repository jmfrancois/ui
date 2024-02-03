// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Service = any
export type NotifyFn = () => void
export type Factory = ((
	notify: NotifyFn,
	...dependencies: Service[]
) => Service) & {
	$id: ServiceId
	dependencies: ServiceId[]
}

export type StructuredFactory = {
	fn: Factory
	dependencies: ServiceId[]
}

export type ServiceId = string

export type onChange = (service: Service) => void

export type IdOrFn = ServiceId | Factory
