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
        setBlock(name: string, block: Block) {
            const blockIndex = this.blocks.findIndex(
                (sBlock) => sBlock.name === name
            )
            this.blocks.splice(blockIndex, 1, block)
        },
        removeBlock(name: string) {
            const blockIndex = this.blocks.findIndex(
                (sBlock) => sBlock.name === name
            )
            this.blocks.splice(blockIndex, 1)
        },
    },
})
