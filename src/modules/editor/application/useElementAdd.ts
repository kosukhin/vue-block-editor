import type { Element } from '@/modules/parser'
import { useRenderChildElement } from '@/modules/renderer'
import { useElementsHash } from '@/modules/editor'

export const useElementAdd = () => {
    const { renderChildElement } = useRenderChildElement()
    const { rebuildElementsHashByNode } = useElementsHash()

    const addElement = (parent: Element, child: Element) => {
        child.parentNode = parent
        parent.childNodes.push(child)
        rebuildElementsHashByNode(parent)
        renderChildElement(parent)
    }

    return { addElement }
}
