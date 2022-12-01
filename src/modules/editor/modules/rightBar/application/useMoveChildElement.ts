import type { Element } from '@/modules/parser'
import { useRenderChildElement } from '@/modules/renderer'
import { isElementSignificant } from '@/shared'

export const useMoveChildElement = () => {
    const { renderChildElement } = useRenderChildElement()

    const moveDownChildElement = (child: Element) => {
        if (!child.parentNode || !child.parentNode.childNodes) {
            return
        }

        const children = child.parentNode.childNodes
        const childIndex = children.findIndex(
            (currentChild) => child.editorId === currentChild.editorId
        )
        let nextSignificantIndex = null

        if (childIndex === children.length - 1) {
            return
        }

        for (let i = childIndex + 1; i <= children.length; i++) {
            if (children[i] && isElementSignificant(children[i])) {
                nextSignificantIndex = i
                break
            }
        }

        if (nextSignificantIndex) {
            children.splice(
                nextSignificantIndex,
                0,
                children.splice(childIndex, 1)[0]
            )
            renderChildElement(child)
        }
    }

    const moveUpChildElement = (child: Element) => {
        if (!child.parentNode || !child.parentNode.childNodes) {
            return
        }

        const children = child.parentNode.childNodes
        const childIndex = children.findIndex(
            (currentChild) => child.editorId === currentChild.editorId
        )
        let prevSignificantIndex = null

        if (childIndex === 0) {
            return
        }

        for (let i = childIndex - 1; i >= 0; i--) {
            if (isElementSignificant(children[i])) {
                prevSignificantIndex = i
                break
            }
        }

        if (prevSignificantIndex) {
            children.splice(
                prevSignificantIndex,
                0,
                children.splice(childIndex, 1)[0]
            )
            renderChildElement(child)
        }
    }

    return {
        moveDownChildElement,
        moveUpChildElement,
    }
}
