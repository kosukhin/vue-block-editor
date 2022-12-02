<script lang="ts" setup>
import { computed, provide } from 'vue'
import { currentTabSymbol } from './constants'

const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
})
const emit = defineEmits(['update:modelValue'])

const internalValue = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
})

provide(currentTabSymbol, internalValue)
</script>

<template>
    <div class="tabs">
        <div class="tabs__header">
            <slot name="header" />
        </div>
        <div class="tabs__content">
            <slot name="content" />
        </div>
    </div>
</template>

<style scoped lang="scss">
@import 'styles/tabs';
</style>
