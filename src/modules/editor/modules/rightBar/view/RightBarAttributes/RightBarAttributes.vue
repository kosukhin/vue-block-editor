<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Attribute } from '@/modules/parser'
import BaseInput from '@/shared/view/ui/BaseInput/BaseInput.vue'
import TrashIcon from '@/shared/view/icons/TrashIcon.vue'
import BaseIcon from '@/shared/view/ui/BaseIcon/BaseIcon.vue'
import BaseButton from '@/shared/view/ui/BaseButton/BaseButton.vue'
import AddIcon from '@/shared/view/icons/AddIcon.vue'
import {
    useAttributeAdd,
    useAttributeRemove,
    useElementGet,
} from '@/modules/editor'
import RightBarAttributeItem from '@/modules/editor/modules/rightBar/view/RightBarAttributeItem/RightBarAttributeItem.vue'

defineProps({
    attributes: {
        type: Array as PropType<Attribute[]>,
        default: () => [],
    },
})

const { currentElement } = useElementGet()
const { removeAttribute } = useAttributeRemove()
const { addAttribute } = useAttributeAdd()

const remove = (attribute: Attribute) => {
    if (!currentElement.value) {
        return
    }

    removeAttribute(currentElement.value, attribute)
}

const add = () => {
    if (!currentElement.value) {
        return
    }

    addAttribute(currentElement.value, {
        name: '',
        value: '',
    })
}
</script>

<template>
    <div class="right-bar-attributes">
        <div
            v-for="attribute in attributes"
            :key="attribute.name"
            class="right-bar-attributes__item"
        >
            <RightBarAttributeItem :value="attribute" />
            <BaseButton
                class="right-bar-attributes__item-button"
                @click="remove(attribute)"
            >
                <BaseIcon>
                    <TrashIcon />
                </BaseIcon>
            </BaseButton>
        </div>
        <BaseButton @click="add">
            <BaseIcon>
                <AddIcon />
            </BaseIcon>
        </BaseButton>
    </div>
</template>

<style scoped lang="scss">
@import 'styles/right-bar-attributes';
</style>
