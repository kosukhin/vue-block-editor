<script lang="ts" setup>
import { computed, inject, Ref } from 'vue'
import { currentTabSymbol } from './constants'

const props = defineProps({
    tab: {
        type: String,
        default: '',
    },
})

const currentTab = inject<Ref<string>>(currentTabSymbol)
const isTabActive = computed(() => currentTab?.value === props.tab)
</script>

<template>
    <div :class="{ 'tab-content--active': isTabActive }" class="tab-content">
        <slot />
    </div>
</template>

<style scoped lang="scss">
@import 'styles/tab-content';
</style>
