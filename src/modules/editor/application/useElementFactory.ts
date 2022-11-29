import type { Element } from '@/modules/parser'
import { initialElement } from '@/modules/parser'
import cloneDeep from 'lodash/cloneDeep'
import { createEditorId } from '@/shared'

export const useElementFactory = () => {
    const elementFactory = (partialElement: Partial<Element>): Element => {
        const baseElement = cloneDeep<Element>(initialElement)
        const editorId = createEditorId()
        baseElement.tagName = partialElement.nodeName

        if (partialElement.nodeName?.charAt(0) === '#') {
            delete baseElement.tagName
            delete baseElement.childNodes
            baseElement.value = ''
            baseElement.data = ''
        }

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
