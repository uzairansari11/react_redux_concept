import * as types from "./type"
const initialState = {
    countValue: 0
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case types.increment_count_value: {
            return {
                ...state, countValue: state.countValue + action.payload
            }
        }

        case types.decrement_count_value: {
            return {
                ...state, countValue: state.countValue - action.payload
            }
        }

        case types.reset_count_value: {
            return {
                ...state, countValue: action.payload
            }
        }



        default: return state

    }

}