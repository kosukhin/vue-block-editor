import type { Element } from '@/modules/parser'
import { useSerializeElementForEditor } from '@/modules/parser'
import { useControlFrameEvents } from '@/modules/renderer'
import { useFrame } from '@/modules/editor'

export const useRenderElement = () => {
    const { serializeElementForEditor } = useSerializeElementForEditor()
    const { controlFrameEvents } = useControlFrameEvents()
    const { frame } = useFrame()

    const renderElement = async (root: Element) => {
        if (!frame.value) {
            return
        }

        frame.value.src = 'about:blank'

        if (frame.value.contentDocument) {
            const html = serializeElementForEditor(root)
            frame.value.contentDocument.open()
            frame.value.contentDocument.write(html)
            frame.value.contentDocument.close()

            controlFrameEvents(frame.value.contentDocument)
        }
    }

    return { renderElement }
}
