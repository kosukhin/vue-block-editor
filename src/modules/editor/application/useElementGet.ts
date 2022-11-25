import { useEditor, useElementsHash } from '@/modules/editor'
import type { Element } from '@/modules/parser'
import type { Nullable } from '@/shared'

export const useElementGet = () => {
    const { elementsHash } = useElementsHash()
    const { currentBlockId } = useEditor()

    const getElementById = (elementId: string): Nullable<Element> => {
        return elementsHash[elementId]
    }

    const getCurrentElement = () => {
        return getElementById(currentBlockId.value)
    }

    return {
        getElementById,
        getCurrentElement,
    }
}
