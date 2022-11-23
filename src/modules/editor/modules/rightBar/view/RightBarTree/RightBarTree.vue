<script lang="ts" setup>
import RightBarTreeItem from '@/modules/editor/modules/rightBar/view/RightBarTree/RightBarTreeItem.vue'
import { PropType } from 'vue'
import { Element } from '@/modules/parser'

defineProps({
    root: {
        type: Object as PropType<Element>,
        required: true,
    },
})
</script>

<template>
    <div class="right-bar-tree">
        <RightBarTreeItem :node="root" />
    </div>
</template>

<style scoped lang="scss"></style>
