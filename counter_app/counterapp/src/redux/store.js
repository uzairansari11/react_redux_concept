import { legacy_createStore, combineReducers } from "redux"
import { reducer as counterReducer } from "./counter/reducer"
const rootReducer = combineReducers({
    counterReducer
})
export const store = legacy_createStore(rootReducer)