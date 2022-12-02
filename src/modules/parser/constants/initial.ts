import type { Element } from '@/modules/parser'
import { NS } from 'parse5/dist/cjs/common/html'
import type { Node } from 'parse5/dist/tree-adapters/default'

export const initialElement: Element = {
    nodeName: 'html',
    tagName: 'html',
    editorId: '',
    childNodes: [],
    onlyEditor: false,
    parentNode: undefined,
    namespaceURI: NS.HTML,
    attrs: [],
}

const node: Node = {
    nodeName: '#text',
    value: '',
    parentNode: null,
}
