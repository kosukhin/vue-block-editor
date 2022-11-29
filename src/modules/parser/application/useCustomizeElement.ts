import type { Element } from '@/modules/parser'
import { createEditorId } from '@/shared'

/**
 * После парсинга элементы нужно дополнить полями редактора
 */
export const useCustomizeElement = () => {
    const customizeElement = (root: Element) => {
        const traverse = (node: Element) => {
            node.editorId = createEditorId()

            if (node.childNodes) {
                node.childNodes.forEach((child) => {
                    traverse(child as Element)
                })
            }
        }

        traverse(root)
    }

    return { customizeElement }
}
