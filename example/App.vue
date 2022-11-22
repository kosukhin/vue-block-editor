<script setup lang="ts">
import Editor from "@/shared/view/Editor/Editor.vue";
import {useRequestLoad} from "./application/useRequestLoad";
import {RequestLoadResponse} from "./model/RequestLoadResponse";
import {ref} from "vue";

const {requestLoad} = useRequestLoad()
const content = ref<RequestLoadResponse>({
    html: '',
    commonSettings: []
})

requestLoad().then((loadResponse) => {
    content.value = loadResponse
})
</script>

<template>
    <div class="app">
        <Editor class="app__editor" :html="content.html" />
    </div>
</template>

<style scoped lang="scss">
@import "./view/styles/app.scss";
</style>
