<script lang="ts" setup>
import { ref } from 'vue'
import { useModal } from '@/shared'
import { useEditorStore, useElementGet } from '@/modules/editor'
import { useSerializeElement } from '@/modules/parser'
import BaseInput from '@/shared/view/ui/BaseInput/BaseInput.vue'
import BaseButton from '@/shared/view/ui/BaseButton/BaseButton.vue'
import BaseTextarea from '@/shared/view/ui/BaseTextarea/BaseTextarea.vue'
import { useTranslate } from '@/modules/i18n'

const { translate } = useTranslate()
const { closeModals } = useModal()
const { currentElement } = useElementGet()
const { serializeElement } = useSerializeElement()
const store = useEditorStore()

const props = defineProps({
    arguments: {
        type: Object,
        default: () => ({}),
    },
})

const name = ref(props.arguments.name ? props.arguments.name : '')
const html = ref(
    props.arguments.html
        ? props.arguments.html
        : currentElement.value
        ? serializeElement(currentElement.value)
        : ''
)

const save = () => {
    if (!name.value || !html.value) {
        return
    }

    if (props.arguments.isNew) {
        store.addBlock({
            name: name.value,
            html: html.value,
        })
    } else {
        store.setBlock(props.arguments.name, {
            name: name.value,
            html: html.value,
        })
    }

    closeModals()
}
</script>

<template>
    <div class="create-block-modal">
        <div class="create-block-modal__row">
            <label for="name">{{ translate('block_name') }}</label>
            <BaseInput id="name" v-model="name" />
        </div>
        <div class="create-block-modal__row">
            <label for="html">{{ translate('template') }}</label>
            <BaseTextarea v-model="html" />
        </div>
        <hr />
        <div>
            <BaseButton @click="save"> {{ translate('save') }} </BaseButton>
            <BaseButton @click="closeModals">
                {{ translate('cancel') }}
            </BaseButton>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import 'styles/create-block-modal';
</style>
