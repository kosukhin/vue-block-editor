import type { Element } from '@/modules/parser'
import { useSerializeElementForEditor } from '@/modules/parser'
import { useElementRoot, useEventDataChanged, useFrame } from '@/modules/editor'
import { blockAttrName, useRenderElement } from '@/modules/renderer'

export const useRenderChildElement = () => {
    const { serializeElementForEditor } = useSerializeElementForEditor()
    const { emitDataChanged } = useEventDataChanged()
    const { renderElement } = useRenderElement()
    const { root } = useElementRoot()
    const { frame } = useFrame()

    const renderChildElement = (child: Element) => {
        if (!frame.value?.contentDocument || !child.parentNode) {
            return
        }

        const parent = child.parentNode as Element
        const elementInDom = frame.value.contentDocument.querySelector(
            `[${blockAttrName}="${parent.editorId}"]`
        )

        if (elementInDom && elementInDom.innerHTML) {
            elementInDom.innerHTML = serializeElementForEditor(parent)
        } else {
            if (root.value) {
                renderElement(root.value)
            }
        }

        emitDataChanged()
    }

    return {
        renderChildElement,
    }
}
