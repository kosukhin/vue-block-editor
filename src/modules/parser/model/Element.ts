import type { Attribute } from '@/modules/parser/model/Attribute'

export interface Element {
    nodeName: string
    childNodes: Element[]
    editorId?: string
    attrs?: Attribute[]
    mode?: string
    tagName?: string
    namespaceURI?: string
    parentNode?: Element
    value?: string
    onlyEditor?: boolean
}
