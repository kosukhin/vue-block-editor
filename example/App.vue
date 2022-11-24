<script setup lang="ts">
import TheEditor from '@/modules/editor/view/TheEditor/TheEditor.vue'
import { useRequestLoad } from './application'
import { RequestLoadResponse } from './model'
import { ref } from 'vue'

const { requestLoad } = useRequestLoad()
const content = ref<RequestLoadResponse>({
    html: '',
    commonSettings: [],
})

requestLoad().then((loadResponse) => {
    content.value = loadResponse
})
</script>

<template>
    <div class="app">
        <TheEditor class="app__editor" lang="ru" :html="content.html" />
    </div>
</template>

<style scoped lang="scss">
@import './view/styles/app';
</style>
