<script lang="ts" setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['input', 'change'])
const props = defineProps({
    value: {
        type: String,
        default: '',
    },
})

const innerValue = ref(props.value)

watch(
    () => props.value,
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
            @input="$emit('input', innerValue)"
            @change="$emit('change', innerValue)"
        />
    </div>
</template>

<style scoped lang="scss">
@import 'styles/base-input';
</style>
