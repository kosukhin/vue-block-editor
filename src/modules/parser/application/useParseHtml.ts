import type { Element } from '@/modules/parser'
import { parse } from 'parse5'
import { initialElement, useCustomizeElement } from '@/modules/parser'

export const useParseHtml = () => {
    const { customizeElement } = useCustomizeElement()

    const parsePartialHtml = (html: string) => {
        const document = parse(html) as unknown
        const body = (document as Element).childNodes?.[0]?.childNodes?.[1]

        if (body) {
            body.nodeName = 'div'
            body.tagName = 'div'
            customizeElement(body)
        }

        return body
    }

    const parseHtml = (html: string): Element => {
        const root = (parse(html).childNodes[1] as Element) ?? initialElement

        customizeElement(root)

        return root
    }

    return {
        parseHtml,
        parsePartialHtml,
    }
}
