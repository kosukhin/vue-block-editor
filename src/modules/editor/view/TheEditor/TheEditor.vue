<script lang="ts" setup>
import { defineProps, toRefs, watch } from 'vue'
import { useUpdateFrame, frameId } from '@/modules/editor'
import { useTranslate } from '@/modules/i18n'

const props = defineProps({
    html: {
        type: String,
        default: '',
        required: true,
    },
})

const { html } = toRefs(props)
const { updateFrame } = useUpdateFrame()
const { translate } = useTranslate()

watch(
    () => html.value,
    (newHtml) => updateFrame(newHtml)
)
</script>

<template>
    <div class="the-editor">
        <div class="the-editor__left-bar">L</div>
        <div class="the-editor__content">
            <iframe :id="frameId" class="the-editor__frame" frameborder="0" />
        </div>
        <div class="the-editor__right-bar">
            {{ translate('blocks_tree') }}
        </div>
    </div>
</template>

<style scoped lang="scss">
@import 'styles/the-editor';
</style>
