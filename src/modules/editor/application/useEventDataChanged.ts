import { useBaseEvent } from '@/shared'
import { createSharedComposable } from '@vueuse/core'

export const useEventDataChanged = createSharedComposable(() => {
    const { onEvent, emitEvent } = useBaseEvent<void, void>(() => undefined)

    return {
        onDataChanged: onEvent,
        emitDataChanged: emitEvent,
    }
})
