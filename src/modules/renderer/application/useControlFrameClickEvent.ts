import { useEventElementSelect } from '@/modules/editor'
import { blockAttrName } from '@/modules/renderer'

export const useControlFrameClickEvent = () => {
    const { emitSelectElement } = useEventElementSelect()

    const controlFrameClickEvent = (frameDocument: Document) => {
        frameDocument.addEventListener('click', (e) => {
            e.preventDefault()
            if (!e.target || !('getAttribute' in e.target)) {
                return
            }

            const targetElement = e.target as HTMLElement
            const selectedBlockId = targetElement.getAttribute(blockAttrName)
            emitSelectElement(String(selectedBlockId))
        })
    }

    return {
        controlFrameClickEvent,
    }
}
