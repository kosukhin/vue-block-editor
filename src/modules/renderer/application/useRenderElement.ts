import type { Element } from '@/modules/parser'
import { useSerializeElementForEditor } from '@/modules/parser'
import {
    useControlFrameEvents,
    useElementBoundingRect,
} from '@/modules/renderer'
import { useFrame } from '@/modules/editor'

export const useRenderElement = () => {
    const { serializeElementForEditor } = useSerializeElementForEditor()
    const { controlFrameEvents } = useControlFrameEvents()
    const { initBoundingRect } = useElementBoundingRect()
    const { frame } = useFrame()

    const renderElement = async (root: Element) => {
        if (!frame.value) {
            return
        }

        frame.value.src = 'about:blank'

        if (frame.value.contentDocument) {
            let html = serializeElementForEditor(root)
            html = initBoundingRect(html)

            frame.value.contentDocument.open()
            frame.value.contentDocument.write(html)
            frame.value.contentDocument.close()

            controlFrameEvents(frame.value.contentDocument)
        }
    }

    return { renderElement }
}
