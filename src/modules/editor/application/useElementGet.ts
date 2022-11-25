import { useEditor, useElementsHash } from '@/modules/editor'
import type { Element } from '@/modules/parser'
import type { Nullable } from '@/shared'
import { computed } from 'vue'

export const useElementGet = () => {
    const { elementsHash } = useElementsHash()
    const { currentBlockId } = useEditor()

    const getElementById = (elementId: string): Nullable<Element> => {
        return elementsHash.value[elementId]
    }

    const currentElement = computed(() => {
        return getElementById(currentBlockId.value)
    })

    return {
        getElementById,
        currentElement,
    }
}
