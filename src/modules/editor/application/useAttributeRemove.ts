import { useRenderChildElement } from '@/modules/renderer'
import type { Attribute, Element } from '@/modules/parser'

export const useAttributeRemove = () => {
    const { renderChildElement } = useRenderChildElement()

    const removeAttribute = (element: Element, attribute: Attribute) => {
        const toRemoveIndex = element.attrs.findIndex((attr) => {
            return attr.name === attribute.name
        })

        if (toRemoveIndex > -1) {
            element.attrs.splice(toRemoveIndex, 1)
            renderChildElement(element)
        }
    }

    return {
        removeAttribute,
    }
}
