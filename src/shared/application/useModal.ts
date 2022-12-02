import { ref } from 'vue'
import type { ModalContent } from '@/shared'
import { createSharedComposable } from '@vueuse/core'

export const useModal = createSharedComposable(() => {
    const modals = ref<ModalContent[]>([])

    const openModal = (modalContent: ModalContent) => {
        modals.value.push(modalContent)
    }

    const closeModals = () => {
        modals.value = []
    }

    return { modals, openModal, closeModals }
})
