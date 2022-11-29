import { createSharedComposable } from '@vueuse/core'
import { useBaseEvent } from '@/shared'

export const useEventElementSelect = createSharedComposable(() => {
    const { onEvent, emitEvent } = useBaseEvent<void, string>(() => undefined)

    return {
        onSelectElement: onEvent,
        emitSelectElement: emitEvent,
    }
})
