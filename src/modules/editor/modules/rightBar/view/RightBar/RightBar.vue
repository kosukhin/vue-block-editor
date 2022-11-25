<script lang="ts" setup>
import { useTranslate } from '@/modules/i18n'
import RightBarTree from '@/modules/editor/modules/rightBar/view/RightBarTree/RightBarTree.vue'
import type { PropType } from 'vue'
import type { Element } from '@/modules/parser'
import { useElementGet } from '@/modules/editor'

defineProps({
    root: {
        type: Object as PropType<Element>,
        required: true,
    },
})

const { translate } = useTranslate()
const { currentElement } = useElementGet()
</script>

<template>
    <div class="right-bar">
        <span class="editor__title">
            {{ translate('attributes') }}
        </span>
        <div v-if="currentElement" class="attributes">
            <b>{{ currentElement.nodeName }}</b>
            <div
                v-for="attribute in currentElement.attrs"
                :key="attribute.name"
            >
                {{ attribute.name }}: {{ attribute.value }}
            </div>
        </div>
        <span class="editor__title">
            {{ translate('blocks_tree') }}
        </span>
        <div class="right-bar__tree">
            <RightBarTree :root="root" />
        </div>
    </div>
</template>

<style scoped lang="scss">
@import 'styles/right-bar';
</style>
