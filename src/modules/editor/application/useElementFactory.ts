import type { Element } from '@/modules/parser'
import { initialElement } from '@/modules/parser'
import cloneDeep from 'lodash/cloneDeep'
import { createEditorId } from '@/shared'

export const useElementFactory = () => {
    const elementFactory = (partialElement: Partial<Element>): Element => {
        const baseElement = cloneDeep<Element>(initialElement)
        const editorId = createEditorId()

        return {
            ...baseElement,
            ...partialElement,
            editorId,
        }
    }

    return {
        elementFactory,
    }
}
