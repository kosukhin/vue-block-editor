import { createSharedComposable } from '@vueuse/core'
import type { Element } from '@/modules/parser'
import type { Dictionary } from '@/shared'
import { ref } from 'vue'

export const useElementsHash = createSharedComposable(() => {
    const elementsHash = ref<Dictionary<Element>>({})

    const traverse = (node: Element) => {
        if (node.editorId) {
            elementsHash.value[node.editorId] = node
        }

        if (node.childNodes) {
            node.childNodes.forEach((child) => traverse(child))
        }
    }

    const buildElementsHashByRoot = (root: Element) => {
        elementsHash.value = {}
        traverse(root)
    }

    const rebuildElementsHashByNode = (node: Element) => {
        traverse(node)
    }

    return {
        elementsHash,
        buildElementsHashByRoot,
        rebuildElementsHashByNode,
    }
})
