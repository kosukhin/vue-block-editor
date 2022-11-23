<script lang="ts" setup>
import { defineProps } from 'vue'
import { useInitEditor } from '@/modules/editor'

const props = defineProps({
    html: {
        type: String,
        required: true,
    },
})

const { initEditor } = useInitEditor()

const { root } = initEditor(props.html)
</script>

<template>
    <div class="editor"></div>
</template>

<style scoped lang="scss">
@import 'styles/the-editor';
</style>
