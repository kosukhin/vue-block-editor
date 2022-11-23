import type { Element } from '@/modules/parser'
import { NS } from 'parse5/dist/cjs/common/html'

export const initialElement: Element = {
    nodeName: 'html',
    tagName: 'html',
    childNodes: [],
    onlyEditor: false,
    parentNode: null,
    namespaceURI: NS.HTML,
    attrs: [],
}
