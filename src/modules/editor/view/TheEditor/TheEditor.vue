<script lang="ts" setup>
import { ref, toRefs, watch } from 'vue'
import { useUpdateFrame, frameId } from '@/modules/editor'
import type { Element } from '@/modules/parser'
import RightBar from '@/modules/editor/modules/rightBar/view/RightBar/RightBar.vue'
import LeftBar from '@/modules/editor/modules/leftBar/view/LeftBar/LeftBar.vue'
import { useEditor } from '@/modules/editor/application/useEditor'

const props = defineProps({
    html: {
        type: String,
        default: '',
        required: true,
    },
})

const { html } = toRefs(props)
const { updateFrame } = useUpdateFrame()
const { currentBlock } = useEditor()
const root = ref<Element | undefined>()

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
            {{ currentBlock }}
            <iframe :id="frameId" class="the-editor__frame" />
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
