import type { Element } from '@/modules/parser'
import { useSerializeElementForEditor } from '@/modules/parser'
import { useFrame } from '@/modules/editor'
import { blockAttrName } from '@/modules/renderer'

export const useRenderChildElement = () => {
    const { serializeElementForEditor } = useSerializeElementForEditor()
    const { frame } = useFrame()

    const renderChildElement = (child: Element) => {
        if (!frame.value?.contentDocument || !child.parentNode) {
            return
        }

        const parent = child.parentNode as Element
        const elementInDom = frame.value.contentDocument.querySelector(
            `[${blockAttrName}="${parent.editorId}"]`
        )

        if (elementInDom) {
            elementInDom.innerHTML = serializeElementForEditor(parent)
        }
    }

    return {
        renderChildElement,
    }
}
