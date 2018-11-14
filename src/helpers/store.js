import {createStore, applyMiddleware} from "redux"
import logger from "./logger"
import thunk from "redux-thunk"
import rootReducer from "../reducers"

const middlewareEnhancer = applyMiddleware(logger, thunk)

export default createStore(rootReducer, undefined, middlewareEnhancer)