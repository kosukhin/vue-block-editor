import type { Dictionary } from '@/shared'

const translationsRu: Dictionary<string> = {
    blocks_tree: 'Дерево блоков',
    attributes: 'Атрибуты',
}

const translationsEn: Dictionary<string> = {
    blocks_tree: 'Blocks tree',
    attributes: 'Attributes',
}

export const translations: Dictionary<Dictionary<string>> = {
    ru: translationsRu,
    en: translationsEn,
}
