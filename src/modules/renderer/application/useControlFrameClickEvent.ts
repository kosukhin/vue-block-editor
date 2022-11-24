import { useEventSelectBlock } from '@/modules/editor'
import { blockAttrName } from '@/modules/renderer'

export const useControlFrameClickEvent = () => {
    const { emitSelectBlock } = useEventSelectBlock()

    const controlFrameClickEvent = (frameDocument: Document) => {
        frameDocument.addEventListener('click', (e) => {
            e.preventDefault()
            if (!e.target || !('getAttribute' in e.target)) {
                return
            }

            const targetElement = e.target as HTMLElement
            const selectedBlockId = targetElement.getAttribute(blockAttrName)
            emitSelectBlock(String(selectedBlockId))
        })
    }

    return {
        controlFrameClickEvent,
    }
}
