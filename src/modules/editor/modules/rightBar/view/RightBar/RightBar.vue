<script lang="ts" setup>
import { useTranslate } from '@/modules/i18n'
import type { PropType } from 'vue'
import type { Element } from '@/modules/parser'
import { scrollTreePadding, useEditor } from '@/modules/editor'
import { onMounted, ref, watch } from 'vue'
import { useScroll } from '@vueuse/core'
import { findBySelector } from '@/shared'
import { blockAttrTreeName } from '@/modules/renderer'
import RightBarTree from '@/modules/editor/modules/rightBar/view/RightBarTree/RightBarTree.vue'
import Tabs from '@/shared/view/ui/Tabs/Tabs.vue'
import TabHeaderItem from '@/shared/view/ui/Tabs/TabHeaderItem.vue'
import TabContent from '@/shared/view/ui/Tabs/TabContent.vue'
import RightBarBlocks from '@/modules/editor/modules/rightBar/view/RightBarBlocks/RightBarBlocks.vue'
import RightBarEditor from '@/modules/editor/modules/rightBar/view/RightBarEditor/RightBarEditor.vue'
import Modal from '@/shared/view/ui/Modal/Modal.vue'

defineProps({
    root: {
        type: Object as PropType<Element>,
        required: true,
    },
})

const { translate } = useTranslate()
const { currentBlockId } = useEditor()

const currentTab = ref('editor')
const rightBarTree = ref()

onMounted(() => {
    const { y, x } = useScroll(rightBarTree.value)

    watch(currentBlockId, (editorId: string) => {
        const element = findBySelector(`[${blockAttrTreeName}="${editorId}"]`)

        if (!element) {
            return
        }

        y.value =
            element.offsetTop - rightBarTree.value.offsetTop - scrollTreePadding
        setTimeout(() => (x.value = element.offsetLeft - scrollTreePadding))
    })
})
</script>

<template>
    <div class="right-bar">
        <Tabs v-model="currentTab" class="right-bar__tabs">
            <template #header>
                <TabHeaderItem tab="editor">Редактор</TabHeaderItem>
                <TabHeaderItem tab="blocks">Блоки</TabHeaderItem>
            </template>
            <template #content>
                <TabContent tab="editor">
                    <RightBarEditor />
                </TabContent>
                <TabContent tab="blocks">
                    <RightBarBlocks />
                </TabContent>
            </template>
        </Tabs>
        <span class="title">
            {{ translate('blocks_tree') }}
        </span>
        <div ref="rightBarTree" class="right-bar__tree">
            <RightBarTree :root="root" />
        </div>
        <Modal />
    </div>
</template>

<style scoped lang="scss">
@import 'styles/right-bar';
</style>
