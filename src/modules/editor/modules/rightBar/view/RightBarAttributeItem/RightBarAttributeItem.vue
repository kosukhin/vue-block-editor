<script lang="ts" setup>
import BaseInput from '@/shared/view/ui/BaseInput/BaseInput.vue'
import type { PropType } from 'vue'
import type { Attribute } from '@/modules/parser'
import { ref, watch } from 'vue'
import { useAttributeUpdate, useElementGet } from '@/modules/editor'

const props = defineProps({
    value: {
        type: Object as PropType<Attribute>,
        default: () => ({ name: '', value: '' }),
    },
})

const { updateAttribute } = useAttributeUpdate()
const { currentElement } = useElementGet()

const innerAttribute = ref({ ...props.value })

watch(
    () => props.value,
    (newValue) => {
        innerAttribute.value = { ...newValue }
    }
)

const changeAttributeName = (newValue: string) => {
    if (!currentElement.value) {
        return
    }

    const name = innerAttribute.value.name
    innerAttribute.value.name = newValue
    updateAttribute(
        currentElement.value,
        {
            ...innerAttribute.value,
        },
        name
    )
}

const changeAttributeValue = (newValue: string) => {
    if (!currentElement.value) {
        return
    }

    innerAttribute.value.value = newValue
    updateAttribute(
        currentElement.value,
        {
            ...innerAttribute.value,
        },
        innerAttribute.value.name
    )
}
</script>

<template>
    <BaseInput
        :model-value="innerAttribute.name"
        @change="changeAttributeName"
    />
    <BaseInput
        :model-value="innerAttribute.value"
        @change="changeAttributeValue"
    />
</template>
