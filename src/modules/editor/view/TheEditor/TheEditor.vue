<script lang="ts" setup>
import { ref, toRefs, watch } from 'vue'
import { useFrameUpdate, frameId, useEditor, useFrame } from '@/modules/editor'
import type { Element } from '@/modules/parser'
import RightBar from '@/modules/editor/modules/rightBar/view/RightBar/RightBar.vue'
import LeftBar from '@/modules/editor/modules/leftBar/view/LeftBar/LeftBar.vue'

const props = defineProps({
    html: {
        type: String,
        required: true,
    },
    lang: {
        type: String,
        default: 'ru',
    },
})

const { html, lang } = toRefs(props)
const { frame } = useFrame()
const { updateFrame } = useFrameUpdate()
const { initEditor } = useEditor()
const root = ref<Element | undefined>()

initEditor(lang.value)

watch(
    () => html.value,
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
