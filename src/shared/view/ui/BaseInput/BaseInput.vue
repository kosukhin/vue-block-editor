<script lang="ts" setup>
import { ref, watch } from 'vue'

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
})

const innerValue = ref(props.modelValue)

watch(
    () => props.modelValue,
    (newValue: string) => {
        innerValue.value = newValue
    }
)
</script>

<template>
    <div class="base-input">
        <input
            v-model="innerValue"
            class="base-input__control"
            @input="$emit('update:modelValue', innerValue)"
            @change="$emit('change', innerValue)"
        />
    </div>
</template>

<style scoped lang="scss">
@import 'styles/base-input';
</style>
