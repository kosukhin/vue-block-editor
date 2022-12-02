import type { Element } from '@/modules/parser'
import { useRenderChildElement } from '@/modules/renderer'
import { useElementsHash } from '@/modules/editor'

export const useElementRemove = () => {
    const { renderChildElement } = useRenderChildElement()
    const { rebuildElementsHashByNode } = useElementsHash()

    const removeElement = (child: Element) => {
        const parent = child.parentNode

        if (!confirm('Вы уверены?')) {
            return
        }

        if (!parent || !parent.childNodes) {
            return
        }

        const toRemoveIndex = parent.childNodes.findIndex((element) => {
            return element.editorId === child.editorId
        })

        if (toRemoveIndex > -1) {
            parent.childNodes.splice(toRemoveIndex, 1)
            renderChildElement(parent)
            rebuildElementsHashByNode(parent)
        }
    }

    return { removeElement }
}
