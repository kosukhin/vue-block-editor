import type { Element } from '@/modules/parser'
import { useRenderChildElement } from '@/modules/renderer'

export const useElementAdd = () => {
    const { renderChildElement } = useRenderChildElement()

    const addElement = (parent: Element, child: Element) => {
        parent.childNodes.push(child)
        renderChildElement(parent)
    }

    return { addElement }
}
