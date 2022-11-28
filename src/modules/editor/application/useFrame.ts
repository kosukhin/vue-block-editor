import { ref } from 'vue'
import { createSharedComposable } from '@vueuse/core'

export const useFrame = createSharedComposable(() => {
    const frame = ref<HTMLIFrameElement>()

    return {
        frame,
    }
})
