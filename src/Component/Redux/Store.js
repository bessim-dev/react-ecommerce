import { createStore, applyMiddleware } from "redux";
import ReducersRoot from "./ReducersRoot/ReducersRoot";
import logger from "redux-logger";
const middlewares = [logger]
export const store = createStore(ReducersRoot,applyMiddleware(...middlewares))