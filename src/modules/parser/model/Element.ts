import type { Element as BaseElement } from 'parse5/dist/tree-adapters/default'

export interface Element extends BaseElement {
    onlyEditor?: boolean
}
