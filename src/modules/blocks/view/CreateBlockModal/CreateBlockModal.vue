<script lang="ts" setup>
import { ref } from 'vue'
import { useModal } from '@/shared'
import { useEditorStore, useElementGet } from '@/modules/editor'
import { useSerializeElement } from '@/modules/parser'
import BaseInput from '@/shared/view/ui/BaseInput/BaseInput.vue'
import BaseButton from '@/shared/view/ui/BaseButton/BaseButton.vue'
import BaseTextarea from '@/shared/view/ui/BaseTextarea/BaseTextarea.vue'

const { closeModals } = useModal()
const { currentElement } = useElementGet()
const { serializeElement } = useSerializeElement()
const store = useEditorStore()

const name = ref('')
const html = ref(
    currentElement.value ? serializeElement(currentElement.value) : ''
)

const save = () => {
    if (!name.value || !html.value) {
        return
    }

    store.addBlock({
        name: name.value,
        html: html.value,
    })
    closeModals()
}
</script>

<template>
    <div class="create-block-modal">
        <div class="create-block-modal__row">
            <label for="name">Название блока</label>
            <BaseInput id="name" v-model="name" />
        </div>
        <div class="create-block-modal__row">
            <label for="html">Разметка</label>
            <BaseTextarea v-model="html" />
        </div>
        <hr />
        <div>
            <BaseButton @click="save"> Сохранить </BaseButton>
            <BaseButton @click="closeModals"> Отмена </BaseButton>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import 'styles/create-block-modal';
</style>
