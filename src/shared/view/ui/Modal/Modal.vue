<script lang="ts" setup>
import { useModal } from '@/shared'

const { modals, closeModals } = useModal()
</script>

<template>
    <div v-if="modals.length" class="modal-wrapper" @click="closeModals">
        <div
            v-for="modal in modals"
            :key="modal.title"
            class="modal"
            @click.stop
        >
            <div class="modal__title">{{ modal.title }}</div>
            <div class="modal__content">
                <component
                    :is="modal.component()"
                    :arguments="modal.arguments"
                />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import 'styles/modal';
</style>
