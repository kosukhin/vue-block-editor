import { useEventSelectBlock, useEditorStore } from '@/modules/editor'
import { storeToRefs } from 'pinia'

export const useEditor = () => {
    const { onSelectBlock } = useEventSelectBlock()
    const store = useEditorStore()
    const { currentBlockId, currentLang } = storeToRefs(store)

    const initEditor = (lang: string) => {
        store.setCurrentLang(lang)

        onSelectBlock((blockId: string) => {
            store.setCurrentBlockId(blockId)
        })
    }

    return {
        currentBlockId,
        initEditor,
        currentLang,
    }
}
