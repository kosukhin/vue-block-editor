import type { Element } from '@/modules/parser'
import { useRenderChildElement } from '@/modules/renderer'

export const useElementRemove = () => {
    const { renderChildElement } = useRenderChildElement()

    const removeElement = (parent: Element, child: Element) => {
        const toRemoveIndex = parent.childNodes.findIndex((element) => {
            return element.editorId === child.editorId
        })

        if (toRemoveIndex > -1) {
            parent.childNodes.splice(toRemoveIndex, 1)
            renderChildElement(parent)
        }
    }

    return { removeElement }
}
