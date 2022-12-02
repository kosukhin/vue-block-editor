<script lang="ts" setup>
import { useEditorStore } from '@/modules/editor'
import { storeToRefs } from 'pinia'

const store = useEditorStore()
const { blocks } = storeToRefs(store)
</script>

<template>
    <div class="right-bar-blocks">
        <template v-if="blocks.length"> Блоки </template>
        <template v-else>
            У вас нет блоков, создайте новый блок в дереве блоков
        </template>
    </div>
</template>

<style scoped lang="scss"></style>
