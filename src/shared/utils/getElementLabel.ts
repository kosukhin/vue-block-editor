import type { Element } from '@/modules/parser'
import { isElementSignificant } from '@/shared'

const inheritanceLabel = (element: Element, deph = 1, maxDeph = 3) => {
    if (!isElementSignificant(element)) {
        return ''
    }

    let label = deph > 1 ? '-' + element.nodeName : element.nodeName
    const children = element.childNodes || []

    if (deph < maxDeph && children[0]) {
        label += inheritanceLabel(children[0], deph + 1)
    }

    if (element.value) {
        label += `(${element.value})`
    }

    return label
}

export const getElementLabel = (element: Element): string => {
    return inheritanceLabel(element)
}
