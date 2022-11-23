import { translations } from '@/modules/i18n/constants'
import { useTranslateLang } from '@/modules/i18n'

export const useTranslate = () => {
    const { lang } = useTranslateLang()

    const translate = (key: string) => {
        return translations[lang.value][key] ?? key
    }

    return { translate }
}
