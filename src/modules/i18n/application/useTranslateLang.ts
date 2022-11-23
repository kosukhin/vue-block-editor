import { ref } from 'vue'
import { createSharedComposable } from '@vueuse/core'

export const useTranslateLang = createSharedComposable(() => {
    const lang = ref<string>('ru')

    const setTranslateLang = (newLang: string) => {
        lang.value = newLang
    }

    return {
        lang,
        setTranslateLang,
    }
})
