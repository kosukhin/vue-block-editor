<script lang="ts" setup>
import { PropType } from 'vue'
import { Element } from '@/modules/parser'
import { useEventSelectBlock } from '@/modules/editor'

defineEmits(['click'])
defineProps({
    node: {
        type: Object as PropType<Element>,
        required: true,
    },
})

const { emitSelectBlock } = useEventSelectBlock()

const selectBlock = (blockId: string) => {
    emitSelectBlock(blockId)
}
</script>

<template>
    <div class="right-bar-tree-item">
        <div class="right-bar-tree-item__title" @click.stop="$emit('click')">
            {{ node.nodeName }}
        </div>
        <div class="right-bar-tree-item__children">
            <RightBarTreeItem
                v-for="childNode in node.childNodes"
                :key="childNode.editorId"
                :node="childNode"
                @click="selectBlock(childNode.editorId)"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
@import 'styles/right-bar-tree-item';
</style>
