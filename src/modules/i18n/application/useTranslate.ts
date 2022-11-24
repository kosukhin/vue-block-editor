import { translations } from '@/modules/i18n'
import { useEditor } from '@/modules/editor'

export const useTranslate = () => {
    const { currentLang } = useEditor()

    const translate = (key: string) =>
        translations[currentLang.value][key] ?? key

    return { translate }
}
