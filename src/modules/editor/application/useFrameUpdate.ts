import { useParseHtml } from '@/modules/parser'
import { useRenderElement } from '@/modules/renderer'
import { useElementsHash } from '@/modules/editor'

export const useFrameUpdate = () => {
    const { parseHtml } = useParseHtml()
    const { renderElement } = useRenderElement()
    const { buildElementsHashByRoot } = useElementsHash()

    const updateFrame = (html: string) => {
        const root = parseHtml(html)
        buildElementsHashByRoot(root)
        renderElement(root)

        return { root }
    }

    return {
        updateFrame,
    }
}
