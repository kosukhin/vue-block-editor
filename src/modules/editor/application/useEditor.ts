import { ref } from 'vue'
import { useEventSelectBlock } from '@/modules/editor'

export const useEditor = () => {
    const { onSelectBlock } = useEventSelectBlock()

    const currentBlock = ref('')

    onSelectBlock((blockId: string) => {
        currentBlock.value = blockId
    })

    return {
        currentBlock,
    }
}
