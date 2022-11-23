import { createSharedComposable } from '@vueuse/core'
import { useBaseEvent } from '@/shared'

export const useEventSelectBlock = createSharedComposable(() => {
    const { onEvent, emitEvent } = useBaseEvent<void, string>(() => undefined)

    return {
        onSelectBlock: onEvent,
        emitSelectBlock: emitEvent,
    }
})
