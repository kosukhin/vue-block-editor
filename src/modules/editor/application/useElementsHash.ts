import { createSharedComposable } from '@vueuse/core'
import type { Element } from '@/modules/parser'
import type { Dictionary } from '@/shared'

export const useElementsHash = createSharedComposable(() => {
    let elementsHash: Dictionary<Element> = {}

    const buildHashByRoot = (root: Element) => {
        elementsHash = {}

        if (root.editorId) {
            elementsHash[root.editorId] = root
        }

        if (root.childNodes) {
            root.childNodes.forEach((child) => buildHashByRoot(child))
        }
    }

    return {
        elementsHash,
        buildHashByRoot,
    }
})
