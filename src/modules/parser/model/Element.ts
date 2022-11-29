import type { Element as BaseElement } from 'parse5/dist/tree-adapters/default'

export interface Element extends BaseElement {
    editorId: string
    onlyEditor?: boolean
    value?: string
    childNodes: Element[]
}
