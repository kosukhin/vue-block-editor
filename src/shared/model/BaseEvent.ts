export type BaseEventHandler<T, P = unknown> = (...args: P[]) => T

export interface BaseEvent<T, P = unknown> {
    onEvent: (handler: BaseEventHandler<T, P>) => void
    emitEvent: BaseEventHandler<T, P>
}
