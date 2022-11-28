<script lang="ts" setup>
defineEmits(['click'])
</script>

<template>
    <button class="base-button" @click="$emit('click', $event)">
        <slot />
    </button>
</template>

<style scoped lang="scss">
@import 'styles/base-button';
</style>
