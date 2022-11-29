import type { Element } from '@/modules/parser'
import { useRenderChildElement } from '@/modules/renderer'

export const useElementUpdate = () => {
    const { renderChildElement } = useRenderChildElement()

    const updateElement = (element: Element) => {
        renderChildElement(element)
    }

    return { updateElement }
}
