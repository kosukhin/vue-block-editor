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

const changeTab = () => {
    if (currentTab?.value) {
        currentTab.value = props.tab
    }
}
</script>

<template>
    <div
        :class="{ 'tab-header-item--active': isTabActive }"
        class="tab-header-item"
        @click="changeTab"
    >
        <slot />
    </div>
</template>

<style scoped lang="scss">
@import 'styles/tab-header-item';
</style>
