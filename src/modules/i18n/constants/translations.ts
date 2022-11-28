import type { Dictionary } from '@/shared'

const translationsRu: Dictionary<string> = {
    blocks_tree: 'Дерево блоков',
    attributes: 'Атрибуты',
    element: 'Элемент',
}

const translationsEn: Dictionary<string> = {
    blocks_tree: 'Blocks tree',
    attributes: 'Attributes',
    element: 'Element',
}

export const translations: Dictionary<Dictionary<string>> = {
    ru: translationsRu,
    en: translationsEn,
}
