import type { RequestLoadResponse } from '../model'

/**
 * Загрузка информации о редактируемом html
 */
export const useRequestLoad = () => {
    const requestLoad = async (): Promise<RequestLoadResponse> => {
        const response = await fetch('http://localhost/demoload/email/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
        })
        return await response.json()
    }

    return {
        requestLoad,
    }
}
