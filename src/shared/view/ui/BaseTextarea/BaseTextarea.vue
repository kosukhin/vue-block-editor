<script lang="ts" setup>
import { Ref, ref, watch } from 'vue'
import { useTextareaAutosize } from '@vueuse/core'

defineEmits(['update:modelValue', 'change'])
const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        default: '',
    },
    isAutoSized: {
        type: Boolean,
        default: false,
    },
})

const { textarea, input: innerValue } = useTextareaAutosize({
    input: props.modelValue,
})

watch(
    () => props.modelValue,
    (newValue: string) => {
        innerValue.value = newValue
    }
)
</script>

<template>
    <div class="base-textarea">
        <textarea
            ref="textarea"
            v-model="innerValue"
            class="base-textarea__control"
            @input="$emit('update:modelValue', innerValue)"
            @change="$emit('change', innerValue)"
        ></textarea>
    </div>
</template>

<style scoped lang="scss">
@import 'styles/base-textarea';
</style>
