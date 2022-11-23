import { useParseHtml } from '@/modules/parser'
import { useRenderElement } from '@/modules/renderer'
import { frameId } from '@/modules/editor'

export const useUpdateFrame = () => {
    const { parseHtml } = useParseHtml()
    const { renderElement } = useRenderElement()

    const updateFrame = (html: string) => {
        const root = parseHtml(html)
        renderElement(root, frameId)

        return { root }
    }

    return {
        updateFrame,
    }
}
