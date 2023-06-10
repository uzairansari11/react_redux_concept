import * as types from "./type"

export const handleIncrementCount = (payload) => {
    return {
        type: types.increment_count_value,
        payload
    }
}


export const handleDecrementCount = (payload) => {
    return {
        type: types.decrement_count_value,
        payload
    }
}


export const handleResetCount = (payload) => {
    return {
        type: types.reset_count_value,
        payload
    }
}