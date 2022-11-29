import type { Element } from '@/modules/parser'

export const isElementSignificant = (node: Element) => {
    return !(node.nodeName === '#text' && node?.value && !node?.value.trim())
}
