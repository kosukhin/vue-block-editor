import type { BaseEvent, BaseEventHandler } from '@/shared'

export const useBaseEvent = <T, P = unknown>(
    defaultHandler: BaseEventHandler<T, P>
): BaseEvent<T, P> => {
    let handler: BaseEventHandler<T, P> = defaultHandler

    const onEvent = (newHandler: BaseEventHandler<T, P>) => {
        handler = newHandler
    }

    const emitEvent: BaseEventHandler<T, P> = (...args) => {
        return handler(...args)
    }

    return {
        onEvent,
        emitEvent,
    }
}
