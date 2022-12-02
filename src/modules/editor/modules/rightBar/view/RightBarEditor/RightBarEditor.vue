<script lang="ts" setup>
import { computed } from 'vue'
import {
    nodeNamesWithoutAttributes,
    systemAttributes,
    useElementGet,
} from '@/modules/editor'
import { useTranslate } from '@/modules/i18n'
import { useModal } from '@/shared'
import RightBarAttributes from '@/modules/editor/modules/rightBar/view/RightBarAttributes/RightBarAttributes.vue'
import RightBarElement from '@/modules/editor/modules/rightBar/view/RightBarElement/RightBarElement.vue'
import BaseButton from '@/shared/view/ui/BaseButton/BaseButton.vue'
import BlockModal from '@/modules/blocks/view/BlockModal/BlockModal.vue'

const { translate } = useTranslate()
const { currentElement } = useElementGet()
const { openModal } = useModal()

const currentElementAttributes = computed(() => {
    if (!currentElement.value || !currentElement.value.attrs) {
        return []
    }

    return currentElement.value.attrs.filter((attribute) => {
        return !systemAttributes.includes(attribute.name)
    })
})

const openBlockModal = () => {
    openModal({
        title: 'Создать блок',
        component: () => BlockModal,
        arguments: {
            isNew: true,
        },
    })
}
</script>

<template>
    <div class="right-bar-editor">
        <template v-if="currentElement">
            <span class="title">
                {{ translate('element') }}
            </span>
            <div class="right-bar-editor__block">
                <RightBarElement />
            </div>
            <template
                v-if="
                    !nodeNamesWithoutAttributes.includes(
                        currentElement.nodeName
                    )
                "
            >
                <span class="title">
                    {{ translate('attributes') }}
                </span>
                <RightBarAttributes
                    class="right-bar-editor__block"
                    :attributes="currentElementAttributes"
                />
            </template>
            <BaseButton @click="openBlockModal">
                {{ translate('save_as_block') }}
            </BaseButton>
        </template>
        <template v-else> {{ translate('select_element') }} </template>
    </div>
</template>

<style scoped lang="scss">
@import 'styles/right-bar-editor';
</style>
