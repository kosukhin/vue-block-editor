import { nodeNames } from '@/modules/node'
import { useTranslate } from '@/modules/i18n'

export const useGetNodeName = () => {
    const { translate } = useTranslate()

    const getNodeName = (nodeName: string) => {
        if (nodeNames[nodeName]) {
            return translate(nodeNames[nodeName])
        }

        return nodeName
    }

    return { getNodeName }
}
