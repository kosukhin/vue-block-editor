<script lang="ts" setup>
import {
    useElementGet,
    useEventElementSelect,
    useMoveChildElement,
    useElementFactory,
    useElementAdd,
    useElementUpdate,
    useElementRemove,
} from '@/modules/editor'
import { useGetNodeName } from '@/modules/node'
import { getElementLabel, isElementSignificant } from '@/shared'
import { computed, ref } from 'vue'
import { useTranslate } from '@/modules/i18n'
import BaseInput from '@/shared/view/ui/BaseInput/BaseInput.vue'
import BaseButton from '@/shared/view/ui/BaseButton/BaseButton.vue'
import BaseIcon from '@/shared/view/ui/BaseIcon/BaseIcon.vue'
import AddIcon from '@/shared/view/icons/AddIcon.vue'
import TrashIcon from '@/shared/view/icons/TrashIcon.vue'
import BaseTextarea from '@/shared/view/ui/BaseTextarea/BaseTextarea.vue'

const { currentElement } = useElementGet()
const { emitSelectElement } = useEventElementSelect()
const { getNodeName } = useGetNodeName()
const { elementFactory } = useElementFactory()
const { addElement } = useElementAdd()
const { updateElement } = useElementUpdate()
const { removeElement } = useElementRemove()
const { moveUpChildElement, moveDownChildElement } = useMoveChildElement()
const { translate } = useTranslate()

const newChildNodeName = ref('')
const currentElementValue = computed(() => currentElement.value?.value)
const significantChildNodes = computed(() =>
    currentElement.value?.childNodes
        ? currentElement.value.childNodes.filter(isElementSignificant)
        : []
)

const createChild = () => {
    if (!newChildNodeName.value || !currentElement.value) {
        return
    }

    const newElement = elementFactory({ nodeName: newChildNodeName.value })
    addElement(currentElement.value, newElement)
    newChildNodeName.value = ''
}

const updateValue = (newValue: string) => {
    if (!currentElement.value) {
        return
    }

    currentElement.value.value = newValue
    updateElement(currentElement.value)
}

const emitSelectParent = () => {
    if (!currentElement.value?.parentNode) {
        return
    }

    emitSelectElement(currentElement.value.parentNode.editorId)
}
</script>

<template>
    <div v-if="currentElement" class="right-bar-element">
        <b class="subtitle">
            ({{ currentElement.nodeName }})
            {{ getNodeName(currentElement.nodeName) }}
        </b>
        <div
            v-if="currentElement.nodeName === '#text'"
            class="right-bar-element__block"
        >
            <div class="subtitle">{{ translate('content') }}</div>
            <BaseTextarea
                :key="`rightbar_content_${currentElementValue}`"
                :model-value="currentElementValue"
                @change="updateValue"
            />
        </div>
        <div v-if="currentElement.parentNode" class="right-bar-element__block">
            <div class="subtitle">{{ translate('parent') }}</div>
            <a
                class="right-bar-element__link"
                href="#"
                @click.prevent="emitSelectParent"
            >
                {{ getElementLabel(currentElement.parentNode) }}
            </a>
        </div>
        <template v-if="currentElement.childNodes">
            <div class="subtitle">{{ translate('children') }}</div>
            <div class="right-bar-element__items">
                <div
                    v-for="child in significantChildNodes"
                    :key="child.editorId"
                    class="right-bar-element__item"
                >
                    <BaseButton @click.stop="removeElement(child)">
                        <BaseIcon>
                            <TrashIcon />
                        </BaseIcon>
                    </BaseButton>
                    <BaseButton @click.stop="moveUpChildElement(child)">
                        &uarr;
                    </BaseButton>
                    <BaseButton @click.stop="moveDownChildElement(child)">
                        &darr;
                    </BaseButton>
                    <a
                        class="right-bar-element__link"
                        href="#"
                        @click.prevent="emitSelectElement(child.editorId)"
                    >
                        {{ getElementLabel(child) }}
                    </a>
                </div>
            </div>
            <div class="right-bar-element__add">
                <BaseInput
                    v-model="newChildNodeName"
                    class="right-bar-element__add-input"
                    placeholder="Новый тэг"
                />
                <BaseButton title="Добавить тэг" @click="createChild">
                    <BaseIcon>
                        <AddIcon />
                    </BaseIcon>
                </BaseButton>
            </div>
        </template>
    </div>
</template>

<style scoped lang="scss">
@import 'styles/right-bar-element';
</style>
