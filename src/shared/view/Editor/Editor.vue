<script lang="ts" setup>
import {defineProps} from 'vue';

defineProps({
        html: {
            type: String,
            required: true
        }
    })
</script>

<template>
  <div class="editor">
    Редактор
  </div>
</template>

<style scoped lang="scss">
</style>
