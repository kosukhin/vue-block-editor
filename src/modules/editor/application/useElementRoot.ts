import { ref } from 'vue'
import type { Element } from '@/modules/parser'
import { createSharedComposable } from '@vueuse/core'

export const useElementRoot = createSharedComposable(() => {
    const root = ref<Element | undefined>()

    return { root }
})
