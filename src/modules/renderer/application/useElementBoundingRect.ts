import type { Dictionary } from '@/shared'
import { serializeStylesHash } from '@/shared/utils/serializeStylesHash'
import { createEditorId } from '@/shared'
import { createSharedComposable } from '@vueuse/core'
import { useEditor, useFrame } from '@/modules/editor'
import { computed, watch } from 'vue'
import { blockAttrName } from '@/modules/renderer'

export const useElementBoundingRect = createSharedComposable(() => {
    const { frame } = useFrame()
    const { currentBlockId } = useEditor()

    const boundingRectId = createEditorId()
    const boundingRect = computed(() => {
        if (frame.value?.contentDocument) {
            return frame.value.contentDocument.getElementById(boundingRectId)
        }

        return null
    })
    const boundingRectStyles: Dictionary<string> = {
        display: 'block',
        position: 'absolute',
        width: '1px',
        height: '1px',
        top: '-10px',
        left: '-10px',
        'z-index': '9999',
        border: '1px solid orange',
        'pointer-events': 'none',
    }

    const initBoundingRect = (html: string) => {
        const styles = serializeStylesHash(boundingRectStyles)
        html += `<div id="${boundingRectId}"></div><style>[id="${boundingRectId}"] { ${styles} }</style>`
        return html
    }

    const updateBoundingRectByElement = (element: HTMLElement) => {
        if (!boundingRect.value || !frame.value?.contentDocument) {
            return
        }

        const { x, y, width, height } = element.getBoundingClientRect()
        const documentX = frame.value.contentDocument.body.scrollLeft
        const documentY = frame.value.contentDocument.body.scrollTop

        boundingRect.value.style.width = String(width)
        boundingRect.value.style.height = String(height)
        boundingRect.value.style.top = String(y + documentY)
        boundingRect.value.style.left = String(x + documentX)
    }

    watch(currentBlockId, (newBlockId) => {
        if (frame.value?.contentDocument) {
            const selectedBlock = frame.value.contentDocument.querySelector(
                `[${blockAttrName}="${newBlockId}"]`
            ) as HTMLElement

            if (selectedBlock) {
                updateBoundingRectByElement(selectedBlock)
            }
        }
    })

    return { initBoundingRect, updateBoundingRectByElement }
})
