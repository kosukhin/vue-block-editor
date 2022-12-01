<script lang="ts" setup>
import { useTranslate } from '@/modules/i18n'
import RightBarTree from '@/modules/editor/modules/rightBar/view/RightBarTree/RightBarTree.vue'
import type { PropType } from 'vue'
import type { Element } from '@/modules/parser'
import {
    nodeNamesWithoutAttributes,
    systemAttributes,
    useElementGet,
} from '@/modules/editor'
import { computed } from 'vue'
import RightBarAttributes from '@/modules/editor/modules/rightBar/view/RightBarAttributes/RightBarAttributes.vue'
import RightBarElement from '@/modules/editor/modules/rightBar/view/RightBarElement/RightBarElement.vue'

defineProps({
    root: {
        type: Object as PropType<Element>,
        required: true,
    },
})

const { translate } = useTranslate()
const { currentElement } = useElementGet()
const currentElementAttributes = computed(() => {
    if (!currentElement.value || !currentElement.value.attrs) {
        return []
    }

    return currentElement.value.attrs.filter((attribute) => {
        return !systemAttributes.includes(attribute.name)
    })
})
</script>

<template>
    <div class="right-bar">
        <template v-if="currentElement">
            <span class="title">
                {{ translate('element') }}
            </span>
            <div class="right-bar__block">
                <RightBarElement />
            </div>
            <template
                v-if="
                    !nodeNamesWithoutAttributes.includes(
                        currentElement.nodeName
                    )
                "
            >
                <span class="title">
                    {{ translate('attributes') }}
                </span>
                <RightBarAttributes
                    class="right-bar__block"
                    :attributes="currentElementAttributes"
                />
            </template>
        </template>
        <span class="title">
            {{ translate('blocks_tree') }}
        </span>
        <div class="right-bar__tree">
            <RightBarTree :root="root" />
        </div>
    </div>
</template>

<style scoped lang="scss">
@import 'styles/right-bar';
</style>
