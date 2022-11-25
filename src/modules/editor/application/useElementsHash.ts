import { createSharedComposable } from '@vueuse/core'
import type { Element } from '@/modules/parser'
import type { Dictionary } from '@/shared'
import { ref } from 'vue'

export const useElementsHash = createSharedComposable(() => {
    const elementsHash = ref<Dictionary<Element>>({})

    const buildHashByRoot = (root: Element) => {
        elementsHash.value = {}

        const traverse = (node: Element) => {
            if (node.editorId) {
                elementsHash.value[node.editorId] = node
            }

            if (node.childNodes) {
                node.childNodes.forEach((child) => traverse(child))
            }
        }

        traverse(root)
    }

    return {
        elementsHash,
        buildHashByRoot,
    }
})
