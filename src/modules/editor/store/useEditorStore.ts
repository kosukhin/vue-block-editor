import { defineStore } from 'pinia'
import type { Block } from '@/modules/editor'

interface State {
    currentBlockId: string
    currentLang: string
    blocks: Block[]
}

export const useEditorStore = defineStore('vueBlockEditor', {
    state: (): State => ({
        currentBlockId: '',
        currentLang: 'ru',
        blocks: [],
    }),
    actions: {
        setCurrentBlockId(blockId: string) {
            this.currentBlockId = blockId
        },
        setCurrentLang(lang: string) {
            this.currentLang = lang
        },
        addBlock(block: Block) {
            this.blocks.push(block)
        },
        setBlocks(blocks: Block[]) {
            this.blocks = blocks
        },
    },
})
