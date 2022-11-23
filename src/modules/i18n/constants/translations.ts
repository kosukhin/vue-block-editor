import type { Dictionary } from '@/shared'

const translationsRu: Dictionary<string> = {
    blocks_tree: 'Дерево блоков',
}

const translationsEn: Dictionary<string> = {
    blocks_tree: 'Blocks tree',
}

export const translations: Dictionary<Dictionary<string>> = {
    ru: translationsRu,
    en: translationsEn,
}
