import type { Element } from '@/modules/parser'
import { parse } from 'parse5'

export const useParseHtml = () => {
    const parseHtml = (html: string): Element => {
        return parse(html) as Element
    }

    return {
        parseHtml,
    }
}
