export const useControlFrameClickEvent = () => {
    const controlFrameClickEvent = (frameDocument: Document) => {
        frameDocument.addEventListener('click', () => {
            console.log('clicked')
        })
    }

    return {
        controlFrameClickEvent,
    }
}
