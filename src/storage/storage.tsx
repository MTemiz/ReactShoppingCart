export const setItem = (key: string, value: string): void => {
    localStorage.setItem(key, value)
}

export const removeItem = (key: string): void => {
    localStorage.removeItem(key)
}

export const getItem = (key: string): string | null => {

    const item = localStorage.getItem(key)

    return item ? JSON.parse(item) : null
}

export default {setItem, removeItem, getItem  }