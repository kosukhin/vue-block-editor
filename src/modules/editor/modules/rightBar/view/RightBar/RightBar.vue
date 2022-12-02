<script lang="ts" setup>
import { useTranslate } from '@/modules/i18n'
import type { PropType } from 'vue'
import type { Element } from '@/modules/parser'
import {
    nodeNamesWithoutAttributes,
    scrollTreePadding,
    systemAttributes,
    useEditor,
    useElementGet,
} from '@/modules/editor'
import { computed, onMounted, ref, watch } from 'vue'
import { useScroll } from '@vueuse/core'
import { findBySelector } from '@/shared'
import { blockAttrTreeName } from '@/modules/renderer'
import RightBarTree from '@/modules/editor/modules/rightBar/view/RightBarTree/RightBarTree.vue'
import RightBarAttributes from '@/modules/editor/modules/rightBar/view/RightBarAttributes/RightBarAttributes.vue'
import RightBarElement from '@/modules/editor/modules/rightBar/view/RightBarElement/RightBarElement.vue'
import Tabs from '@/shared/view/ui/Tabs/Tabs.vue'
import TabHeaderItem from '@/shared/view/ui/Tabs/TabHeaderItem.vue'
import TabContent from '@/shared/view/ui/Tabs/TabContent.vue'

defineProps({
    root: {
        type: Object as PropType<Element>,
        required: true,
    },
})

const { translate } = useTranslate()
const { currentElement } = useElementGet()
const { currentBlockId } = useEditor()

const currentTab = ref('editor')
const rightBarTree = ref()
const currentElementAttributes = computed(() => {
    if (!currentElement.value || !currentElement.value.attrs) {
        return []
    }

    return currentElement.value.attrs.filter((attribute) => {
        return !systemAttributes.includes(attribute.name)
    })
})

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
        <Tabs v-model="currentTab">
            <template #header>
                <TabHeaderItem tab="editor">Редактор</TabHeaderItem>
                <TabHeaderItem tab="blocks">Блоки</TabHeaderItem>
            </template>
            <template #content>
                <TabContent tab="editor">Редактор</TabContent>
                <TabContent tab="blocks">Блоки</TabContent>
            </template>
        </Tabs>
        <template v-if="currentElement">
            <span class="title">
                {{ translate('element') }}
            </span>
            <div class="right-bar__block">
                <RightBarElement />
            </div>
            <template
                v-if="
                    !nodeNamesWithoutAttributes.includes(
                        currentElement.nodeName
                    )
                "
            >
                <span class="title">
                    {{ translate('attributes') }}
                </span>
                <RightBarAttributes
                    class="right-bar__block"
                    :attributes="currentElementAttributes"
                />
            </template>
        </template>
        <span class="title">
            {{ translate('blocks_tree') }}
        </span>
        <div ref="rightBarTree" class="right-bar__tree">
            <RightBarTree :root="root" />
        </div>
    </div>
</template>

<style scoped lang="scss">
@import 'styles/right-bar';
</style>
