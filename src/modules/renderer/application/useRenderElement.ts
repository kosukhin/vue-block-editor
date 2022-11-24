import type { Element } from '@/modules/parser'
import { useSerializeElementForEditor } from '@/modules/parser'
import { useControlFrameEvents } from '@/modules/renderer'

export const useRenderElement = () => {
    const { serializeElementForEditor } = useSerializeElementForEditor()
    const { controlFrameEvents } = useControlFrameEvents()

    const renderElement = async (root: Element, frameId: string) => {
        const frame = document.getElementById(frameId) as HTMLIFrameElement
        frame.src = 'about:blank'

        if (frame.contentDocument) {
            const html = serializeElementForEditor(root)
            frame.contentDocument.open()
            frame.contentDocument.write(html)
            frame.contentDocument.close()

            controlFrameEvents(frame.contentDocument)
        }
    }

    return { renderElement }
}
