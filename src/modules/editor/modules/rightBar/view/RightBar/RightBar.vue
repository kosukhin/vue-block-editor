<script lang="ts" setup>
import { useTranslate } from '@/modules/i18n'
import RightBarTree from '@/modules/editor/modules/rightBar/view/RightBarTree/RightBarTree.vue'
import type { PropType } from 'vue'
import type { Element } from '@/modules/parser'

defineProps({
    root: {
        type: Object as PropType<Element>,
        required: true,
    },
})

const { translate } = useTranslate()
</script>

<template>
    <div class="right-bar">
        <div class="right-bar__block">
            <span class="editor__title">
                {{ translate('attributes') }}
            </span>
            attrs
        </div>
        <div class="right-bar__block">
            <span class="editor__title">
                {{ translate('blocks_tree') }}
            </span>
            <div class="right-bar__tree">
                <RightBarTree :root="root" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import 'styles/right-bar';
</style>
