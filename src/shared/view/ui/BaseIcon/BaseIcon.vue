<script lang="ts" setup>
defineProps({
    size: {
        type: String,
        validator: (value: string) =>
            ['small', 'big', 'medium'].includes(value),
        default: 'small',
    },
})
</script>

<template>
    <div :class="{ [`base-icon--${size}`]: true }" class="base-icon">
        <slot />
    </div>
</template>

<style scoped lang="scss">
@import 'styles/base-icon';
</style>
