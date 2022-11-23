import type { Element } from '@/modules/parser'
import { v4 as uuidv4 } from 'uuid'

/**
 * После парсинга элементы нужно дополнить полями редактора
 */
export const useCustomizeElement = () => {
    const customizeElement = (root: Element) => {
        const traverse = (node: Element) => {
            node.editorId = uuidv4()

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
