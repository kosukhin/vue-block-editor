import type { Attribute, Element } from '@/modules/parser'
import { useRenderChildElement } from '@/modules/renderer'

export const useAttributeAdd = () => {
    const { renderChildElement } = useRenderChildElement()

    const addAttribute = (element: Element, attribute: Attribute) => {
        element.attrs.push(attribute)
        renderChildElement(element)
    }

    return { addAttribute }
}
