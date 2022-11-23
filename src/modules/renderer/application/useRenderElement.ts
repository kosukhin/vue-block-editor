import type { Element } from '@/modules/parser'
import { useSerializeElement } from '@/modules/parser'

export const useRenderElement = () => {
    const { serializeElement } = useSerializeElement()

    const renderElement = async (root: Element, frameId: string) => {
        const frame = document.getElementById(frameId) as HTMLIFrameElement
        frame.src = 'about:blank'

        if (frame.contentDocument) {
            const html = serializeElement(root)
            frame.contentDocument.open()
            frame.contentDocument.write(html)
            frame.contentDocument.close()
        }
    }

    return { renderElement }
}
