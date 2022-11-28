<script lang="ts" setup>
import { useElementGet, useEventSelectBlock } from '@/modules/editor'
import { useGetNodeName } from '@/modules/node'

const { currentElement } = useElementGet()
const { emitSelectBlock } = useEventSelectBlock()
const { getNodeName } = useGetNodeName()
</script>

<template>
    <div class="right-bar-element">
        <b class="subtitle">
            ({{ currentElement.nodeName }})
            {{ getNodeName(currentElement.nodeName) }}
        </b>
        <template v-if="currentElement.parentNode">
            <div class="right-bar-element__block">
                <div class="subtitle">Родитель</div>
                <a
                    class="right-bar-element__link"
                    href="#"
                    @click.prevent="
                        emitSelectBlock(currentElement.parentNode.editorId)
                    "
                    >{{ currentElement.parentNode.nodeName }}</a
                >
            </div>
        </template>
        <template v-if="currentElement.childNodes">
            <div class="subtitle">Дочерние</div>
            <a
                v-for="child in currentElement.childNodes"
                :key="child.editorId"
                class="right-bar-element__link"
                href="#"
                @click.prevent="emitSelectBlock(child.editorId)"
                >{{ child.nodeName }}</a
            >
        </template>
    </div>
</template>

<style scoped lang="scss">
@import 'styles/right-bar-element';
</style>
