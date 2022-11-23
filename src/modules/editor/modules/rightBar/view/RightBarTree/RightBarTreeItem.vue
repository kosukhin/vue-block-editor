<script lang="ts" setup>
import { PropType } from 'vue'
import { Element } from '@/modules/parser'

defineProps({
    node: {
        type: Object as PropType<Element>,
        required: true,
    },
})
</script>

<template>
    <div class="right-bar-tree-item">
        <div class="right-bar-tree-item__title">
            {{ node.nodeName }}
        </div>
        <div class="right-bar-tree-item__children">
            <RightBarTreeItem
                v-for="childNode in node.childNodes"
                :node="childNode"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
@import 'styles/right-bar-tree-item';
</style>
