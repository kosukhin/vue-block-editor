import type { Nullable } from '@/shared'

export const findBySelector = (selector: string): Nullable<HTMLElement> => {
    return document.querySelector(selector) as HTMLElement
}
