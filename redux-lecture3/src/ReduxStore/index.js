import { combineReducers, createStore } from "redux"
import { visitedProductReducer } from "./visitedProducts"

const rrotReducer = combineReducers({
  visitedProducts:visitedProductReducer
})

const store = createStore(rootReducer)
