<script lang="ts" setup>
import { useElementGet, useEventElementSelect } from '@/modules/editor'
import { useGetNodeName } from '@/modules/node'
import BaseInput from '@/shared/view/ui/BaseInput/BaseInput.vue'
import BaseButton from '@/shared/view/ui/BaseButton/BaseButton.vue'
import BaseIcon from '@/shared/view/ui/BaseIcon/BaseIcon.vue'
import AddIcon from '@/shared/view/icons/AddIcon.vue'
import { computed, ref } from 'vue'
import { useElementFactory } from '@/modules/editor'
import { useElementAdd } from '@/modules/editor/application/useElementAdd'
import { useElementUpdate } from '@/modules/editor/application/useElementUpdate'
import { getElementLabel } from '@/shared/utils/getElementLabel'
import TrashIcon from '@/shared/view/icons/TrashIcon.vue'
import { useElementRemove } from '@/modules/editor/application/useElementRemove'

const { currentElement } = useElementGet()
const { emitSelectElement } = useEventElementSelect()
const { getNodeName } = useGetNodeName()
const { elementFactory } = useElementFactory()
const { addElement } = useElementAdd()
const { updateElement } = useElementUpdate()
const { removeElement } = useElementRemove()

const newChildNodeName = ref('')
const currentElementValue = computed(() => currentElement.value?.value)

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
</script>

<template>
    <div class="right-bar-element">
        <b class="subtitle">
            ({{ currentElement.nodeName }})
            {{ getNodeName(currentElement.nodeName) }}
        </b>
        <div
            v-if="currentElement.nodeName === '#text'"
            class="right-bar-element__block"
        >
            <div class="subtitle">Содержимое</div>
            <BaseInput
                :model-value="currentElementValue"
                @change="updateValue"
            />
        </div>
        <div v-if="currentElement.parentNode" class="right-bar-element__block">
            <div class="subtitle">Родитель</div>
            <a
                class="right-bar-element__link"
                href="#"
                @click.prevent="
                    emitSelectElement(currentElement.parentNode.editorId)
                "
            >
                {{ getElementLabel(currentElement.parentNode) }}
            </a>
        </div>
        <template v-if="currentElement.childNodes">
            <div class="subtitle">Дочерние</div>
            <div class="right-bar-element__items">
                <a
                    v-for="child in currentElement.childNodes"
                    :key="child.editorId"
                    class="right-bar-element__link"
                    href="#"
                    @click.prevent="emitSelectElement(child.editorId)"
                >
                    {{ getElementLabel(child) }}
                    <BaseButton @click.stop="removeElement(child)">
                        <BaseIcon>
                            <TrashIcon />
                        </BaseIcon>
                    </BaseButton>
                </a>
            </div>
            <div class="right-bar-element__add">
                <BaseInput v-model="newChildNodeName" placeholder="Тэг" />
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
