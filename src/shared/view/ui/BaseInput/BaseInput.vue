<script lang="ts" setup>
defineEmits(['input'])
defineProps({
    value: {
        type: String,
        default: '',
    },
})
</script>

<template>
    <div class="base-input">
        <input
            class="base-input__control"
            :value="value"
            @input="$emit('input', $event)"
        />
    </div>
</template>

<style scoped lang="scss">
@import 'styles/base-input';
</style>
