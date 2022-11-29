import type { Element } from '@/modules/parser'

export const getElementLabel = (element: Element): string => {
    let label = element.nodeName

    if (element.value) {
        label += `(${element.value})`
    }

    return label
}
