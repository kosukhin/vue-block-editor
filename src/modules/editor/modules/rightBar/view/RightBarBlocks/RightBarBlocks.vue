<script lang="ts" setup>
import {
    Block,
    useEditorStore,
    useElementAdd,
    useElementGet,
} from '@/modules/editor'
import { storeToRefs } from 'pinia'
import { useParseHtml } from '@/modules/parser'
import BlockModal from '@/modules/blocks/view/BlockModal/BlockModal.vue'
import { useModal } from '@/shared'

const store = useEditorStore()
const { blocks } = storeToRefs(store)
const { parsePartialHtml } = useParseHtml()
const { addElement } = useElementAdd()
const { currentElement } = useElementGet()
const { openModal } = useModal()

const addBlock = (html: string) => {
    if (!currentElement.value) {
        return
    }

    const root = parsePartialHtml(html)

    if (root) {
        addElement(currentElement.value, root)
    }
}

const openBlockModal = (block: Block) => {
    openModal({
        title: 'Изменить блок',
        component: () => BlockModal,
        arguments: {
            ...block,
        },
    })
}

const removeBlock = (block: Block) => {
    if (!confirm('Удалить блок?')) {
        return
    }

    store.removeBlock(block.name)
}
</script>

<template>
    <div class="right-bar-blocks">
        <template v-if="blocks.length">
            <div class="right-bar-blocks__items">
                <div
                    v-for="block in blocks"
                    :key="block.name"
                    class="right-bar-blocks__item"
                >
                    <div class="right-bar-blocks__item-title">
                        {{ block.name }}
                    </div>
                    <div class="right-bar-blocks__actions">
                        <a href="#" @click.prevent="openBlockModal(block)">
                            Изменить
                        </a>
                        <a href="#" @click.prevent="removeBlock(block)">
                            Удалить
                        </a>
                        <div>Добавить блок:</div>
                        <a href="#" @click.prevent="addBlock(block.html)"
                            >внутрь текущего</a
                        >
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            У вас нет блоков, создайте новый блок из текущего во вкладке
            Редактор
        </template>
    </div>
</template>

<style scoped lang="scss">
@import 'styles/right-bar-blocks';
</style>
