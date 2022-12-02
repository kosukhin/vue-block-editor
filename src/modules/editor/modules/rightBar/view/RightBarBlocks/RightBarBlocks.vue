<script lang="ts" setup>
import {
    Block,
    useEditorStore,
    useElementAdd,
    useElementGet,
} from '@/modules/editor'
import { storeToRefs } from 'pinia'
import { useParseHtml } from '@/modules/parser'
import { useModal } from '@/shared'
import BlockModal from '@/modules/blocks/view/BlockModal/BlockModal.vue'
import { useTranslate } from '@/modules/i18n'

const store = useEditorStore()
const { translate } = useTranslate()
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
        title: translate('change_block'),
        component: () => BlockModal,
        arguments: {
            ...block,
        },
    })
}

const removeBlock = (block: Block) => {
    if (!confirm(translate('remove_block'))) {
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
                            {{ translate('change') }}
                        </a>
                        <a href="#" @click.prevent="removeBlock(block)">
                            {{ translate('remove') }}
                        </a>
                        <div>{{ translate('add_block') }}:</div>
                        <a href="#" @click.prevent="addBlock(block.html)">
                            {{ translate('inside_current') }}
                        </a>
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            {{ translate('you_dont_have_blocks') }}
        </template>
    </div>
</template>

<style scoped lang="scss">
@import 'styles/right-bar-blocks';
</style>
