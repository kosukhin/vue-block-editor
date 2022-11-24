import { useEventSelectBlock, useEditorStore } from '@/modules/editor'
import { storeToRefs } from 'pinia'

export const useEditor = () => {
    const { onSelectBlock } = useEventSelectBlock()
    const store = useEditorStore()
    const { currentBlockId } = storeToRefs(store)

    const initEditor = () => {
        onSelectBlock((blockId: string) => {
            store.setCurrentBlockId(blockId)
        })
    }

    return {
        currentBlockId,
        initEditor,
    }
}
