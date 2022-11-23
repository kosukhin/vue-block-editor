<script lang="ts" setup>
import { useTranslate } from '@/modules/i18n'
import RightBarTree from '@/modules/editor/modules/rightBar/view/RightBarTree/RightBarTree.vue'

const { translate } = useTranslate()
</script>

<template>
    <div class="right-bar">
        <div class="right-bar__block">
            <span class="editor__title">
                {{ translate('blocks_tree') }}
            </span>
            <RightBarTree />
        </div>
    </div>
</template>

<style scoped lang="scss">
@import 'styles/right-bar';
</style>
