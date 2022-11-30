<script lang="ts" setup>
import { watch } from 'vue'
import {
    useFrameUpdate,
    frameId,
    useEditor,
    useFrame,
    useElementRoot,
    useEventDataChanged,
} from '@/modules/editor'
import RightBar from '@/modules/editor/modules/rightBar/view/RightBar/RightBar.vue'
import LeftBar from '@/modules/editor/modules/leftBar/view/LeftBar/LeftBar.vue'
import { useSerializeElement } from '@/modules/parser'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
    newHtml: {
        type: String,
        default: '',
    },
    lang: {
        type: String,
        default: 'ru',
    },
})

const { onDataChanged } = useEventDataChanged()
const { frame } = useFrame()
const { root } = useElementRoot()
const { updateFrame } = useFrameUpdate()
const { initEditor } = useEditor()
const { serializeElement } = useSerializeElement()

initEditor(props.lang)

onDataChanged(() => {
    if (!root.value) {
        return
    }

    const innerHTML = serializeElement(root.value)
    emit('update:modelValue', `<!doctype html><html>${innerHTML}</html>`)
})

watch(
    () => props.newHtml,
    (newHtml) => {
        const { root: updatedRoot } = updateFrame(newHtml)
        root.value = updatedRoot
    }
)
</script>

<template>
    <div class="the-editor">
        <LeftBar class="the-editor__left-bar" />
        <div class="the-editor__content">
            <iframe :id="frameId" ref="frame" class="the-editor__frame" />
        </div>
        <RightBar v-if="root" :root="root" class="the-editor__right-bar" />
    </div>
</template>

<style lang="scss">
@import '@/shared/view/styles/global';
</style>

<style scoped lang="scss">
@import 'styles/the-editor';
</style>
