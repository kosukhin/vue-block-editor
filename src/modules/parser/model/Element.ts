import type { Element as BaseElement } from 'parse5/dist/tree-adapters/default'

export interface Element extends Omit<BaseElement, 'tagName' | 'childNodes'> {
    editorId: string
    onlyEditor?: boolean
    value?: string
    data?: string
    childNodes?: Element[]
    tagName?: string
}
