<script lang="ts" setup>
import { useTranslate } from '@/modules/i18n'
import RightBarTree from '@/modules/editor/modules/rightBar/view/RightBarTree/RightBarTree.vue'
import type { PropType } from 'vue'
import type { Element } from '@/modules/parser'
import { useEditor } from '@/modules/editor'

defineProps({
    root: {
        type: Object as PropType<Element>,
        required: true,
    },
})

const { translate } = useTranslate()
const { currentBlockId } = useEditor()
</script>

<template>
    <div class="right-bar">
        <span class="editor__title">
            {{ translate('attributes') }}
        </span>
        attrs {{ currentBlockId }}
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
