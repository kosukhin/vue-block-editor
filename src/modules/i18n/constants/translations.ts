import type { Dictionary } from '@/shared'

const translationsRu: Dictionary<string> = {
    blocks_tree: 'Дерево блоков',
    attributes: 'Атрибуты',
    element: 'Элемент',
    node_paragraph: 'Параграф',
    node_div: 'Блок',
    node_span: 'Часть текста',
    node_h1: 'Заголовок 1',
    node_h2: 'Заголовок 2',
    node_h3: 'Заголовок 3',
    node_text: 'Текст',
    node_style: 'Стили CSS',
    node_head: 'Описание страницы',
    node_body: 'Тело страницы',
    node_meta: 'Метатэг',
    node_title: 'Заголовок страницы',
    node_html: 'Документ',
}

const translationsEn: Dictionary<string> = {
    blocks_tree: 'Blocks tree',
    attributes: 'Attributes',
    element: 'Element',
    node_paragraph: 'Paragraph',
    node_div: 'Block',
    node_span: 'Text part',
    node_h1: 'Header 1',
    node_h2: 'Header 2',
    node_h3: 'Header 3',
    node_text: 'Text',
    node_style: 'Styles CSS',
    node_head: 'Page head',
    node_body: 'Page body',
    node_meta: 'Meta tag',
    node_title: 'Page title',
    node_html: 'Document',
}

export const translations: Dictionary<Dictionary<string>> = {
    ru: translationsRu,
    en: translationsEn,
}
