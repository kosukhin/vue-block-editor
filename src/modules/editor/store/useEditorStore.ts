import { defineStore } from 'pinia'

interface State {
    currentBlockId: string
    currentLang: string
}

export const useEditorStore = defineStore('vueBlockEditor', {
    state: (): State => ({
        currentBlockId: '',
        currentLang: 'ru',
    }),
    actions: {
        setCurrentBlockId(blockId: string) {
            this.currentBlockId = blockId
        },
        setCurrentLang(lang: string) {
            this.currentLang = lang
        },
    },
})
