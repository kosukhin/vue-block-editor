import type { Element } from '@/modules/parser'
import { useSerializeElement } from '@/modules/parser'
import { blockAttrName } from '@/modules/renderer'

/**
 * Сериализация HTML для вывода внутри редактора
 */
export const useSerializeElementForEditor = () => {
    const { serializeElement } = useSerializeElement()

    const serializeElementForEditor = (root: Element) => {
        const traverse = (node: Element) => {
            const idAttribute = {
                name: blockAttrName,
                value: node.editorId,
            }

            if (node.attrs) {
                node.attrs.push(idAttribute)
            } else {
                node.attrs = [idAttribute]
            }

            if (node.childNodes) {
                node.childNodes.forEach((child) => {
                    traverse(child as Element)
                })
            }
        }

        traverse(root)

        return serializeElement(root)
    }

    return {
        serializeElementForEditor,
    }
}
