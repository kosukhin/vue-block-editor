import { useEventElementSelect, useEditorStore } from '@/modules/editor'
import { storeToRefs } from 'pinia'

export const useEditor = () => {
    const { onSelectElement } = useEventElementSelect()
    const store = useEditorStore()
    const { currentBlockId, currentLang } = storeToRefs(store)

    const initEditor = (lang: string) => {
        store.setCurrentLang(lang)

        onSelectElement((blockId: string) => {
            store.setCurrentBlockId(blockId)
        })
    }

    return {
        currentBlockId,
        initEditor,
        currentLang,
    }
}
