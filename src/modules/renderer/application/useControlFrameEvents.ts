import { useControlFrameClickEvent } from '@/modules/renderer/application/useControlFrameClickEvent'

export const useControlFrameEvents = () => {
    const { controlFrameClickEvent } = useControlFrameClickEvent()

    const controlFrameEvents = (frameDocument: Document) => {
        controlFrameClickEvent(frameDocument)
    }

    return {
        controlFrameEvents,
    }
}
