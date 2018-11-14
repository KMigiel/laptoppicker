import {combineReducers} from "redux"
import laptops from "./laptops"
import {reducer as formReducer} from "redux-form"


export default combineReducers({
    form: formReducer,
    laptops
})