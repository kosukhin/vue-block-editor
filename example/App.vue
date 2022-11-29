<script setup lang="ts">
import TheEditor from '@/modules/editor/view/TheEditor/TheEditor.vue'
import { useFileSystemAccess } from '@vueuse/core'

const { isSupported, open, data, save } = useFileSystemAccess()

const openFile = async () => {
    if (!isSupported) {
        return
    }

    await open()
}

const saveFile = () => {
    if (!isSupported) {
        return
    }

    save()
}
</script>

<template>
    <div class="app">
        <div class="app__buttons">
            <button @click="openFile">Открыть файл</button>
            <button @click="saveFile">Сохранить</button>
        </div>
        <TheEditor v-model="data" class="app__editor" lang="ru" />
    </div>
</template>

<style scoped lang="scss">
@import './view/styles/app';
</style>
