import { useRenderChildElement } from '@/modules/renderer'
import type { Attribute, Element } from '@/modules/parser'
import { set } from '@vueuse/core'

export const useAttributeUpdate = () => {
    const { renderChildElement } = useRenderChildElement()

    const updateAttribute = (
        element: Element,
        attribute: Attribute,
        name: string
    ) => {
        const toUpdateIndex = element.attrs.findIndex((attr) => {
            return attr.name === name
        })

        if (toUpdateIndex > -1) {
            set(element.attrs, toUpdateIndex, { ...attribute })
            renderChildElement(element)
        }
    }

    return { updateAttribute }
}
