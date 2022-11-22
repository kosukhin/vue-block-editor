export const useRequestSave = () => {
    const requestSave = async () => {
        const response = await fetch('http://localhost/demoload/email/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        return await response.json()
    }
    return { requestSave }
}
