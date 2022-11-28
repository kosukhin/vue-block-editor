<script lang="ts" setup>
import { useTranslate } from '@/modules/i18n'
import RightBarTree from '@/modules/editor/modules/rightBar/view/RightBarTree/RightBarTree.vue'
import type { PropType } from 'vue'
import type { Element } from '@/modules/parser'
import { systemAttributes, useElementGet } from '@/modules/editor'
import { computed } from 'vue'
import BaseInput from '@/shared/view/ui/BaseInput/BaseInput.vue'
import TrashIcon from '@/shared/view/icons/TrashIcon.vue'
import BaseIcon from '@/shared/view/ui/BaseIcon/BaseIcon.vue'
import BaseButton from '@/shared/view/ui/BaseButton/BaseButton.vue'
import AddIcon from '@/shared/view/icons/AddIcon.vue'

defineProps({
    root: {
        type: Object as PropType<Element>,
        required: true,
    },
})

const { translate } = useTranslate()
const { currentElement } = useElementGet()

const currentElementAttributes = computed(() => {
    if (!currentElement.value) {
        return []
    }

    return currentElement.value.attrs.filter((attribute) => {
        return !systemAttributes.includes(attribute.name)
    })
})

const removeAttribute = () => {
    console.log('remove')
}

const changeAttributeName = () => {
    console.log('change name')
}

const changeAttributeValue = () => {
    console.log('change value')
}

const addAttribute = () => {
    console.log('add attribute')
}
</script>

<template>
    <div class="right-bar">
        <span class="editor__title">
            {{ translate('attributes') }}
        </span>
        <div v-if="currentElement" class="attributes">
            <b>{{ currentElement.nodeName }}</b>
            <div
                v-for="attribute in currentElementAttributes"
                :key="attribute.name"
                class="attributes__item"
            >
                <BaseInput
                    class="attributes__item-control"
                    :value="attribute.name"
                    @input="changeAttributeName"
                />
                <BaseInput
                    class="attributes__item-control"
                    :value="attribute.value"
                    @input="changeAttributeValue"
                />
                <BaseButton
                    class="attributes__item-button"
                    @click="removeAttribute"
                >
                    <BaseIcon>
                        <TrashIcon />
                    </BaseIcon>
                </BaseButton>
            </div>
            <BaseButton @click="addAttribute">
                <BaseIcon>
                    <AddIcon />
                </BaseIcon>
            </BaseButton>
        </div>
        <span class="editor__title">
            {{ translate('blocks_tree') }}
        </span>
        <div class="right-bar__tree">
            <RightBarTree :root="root" />
        </div>
    </div>
</template>

<style scoped lang="scss">
@import 'styles/right-bar';
</style>
