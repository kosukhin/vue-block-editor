import { useParseHtml } from '@/modules/parser'

export const useInitEditor = () => {
    const { parseHtml } = useParseHtml()

    const initEditor = (html: string) => {
        const root = parseHtml(html)

        return {
            root,
        }
    }

    return { initEditor }
}
