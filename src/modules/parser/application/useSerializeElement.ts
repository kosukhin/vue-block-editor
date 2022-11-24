import type { Element } from '@/modules/parser'
import { serialize } from 'parse5'
import type { ParentNode } from 'parse5/dist/tree-adapters/default'

/**
 * Сериализация итогового HTML, который получит пользователь редактора
 */
export const useSerializeElement = () => {
    const serializeElement = (root: Element): string =>
        serialize(root as ParentNode)

    return { serializeElement }
}
