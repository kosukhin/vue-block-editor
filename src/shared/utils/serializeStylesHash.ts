import type { Dictionary } from '@/shared'

export const serializeStylesHash = (styles: Dictionary<string>): string => {
    return Object.entries(styles).reduce((acc, entry) => {
        acc += `${entry[0]}: ${entry[1]};`
        return acc
    }, '')
}
