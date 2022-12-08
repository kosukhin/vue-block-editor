<script setup lang="ts">
import TheEditor from '@/modules/editor/view/TheEditor/TheEditor.vue'
import { useFileSystemAccess } from '@vueuse/core'
import { computed, ref } from 'vue'
import html from './view/default'

const { isSupported, open, data, save } = useFileSystemAccess({})

const newHtml = ref(html)
const innerData = computed<string>({
    get: () => String(data.value),
    set: (newValue: string) => (data.value = newValue),
})

const openFile = async () => {
    if (!isSupported) {
        return
    }

    await open()
    newHtml.value = String(data.value)
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
        <TheEditor
            v-model="innerData"
            :new-html="newHtml"
            class="app__editor"
            lang="ru"
        />
    </div>
</template>

<style scoped lang="scss">
@import './view/styles/app';
</style>
