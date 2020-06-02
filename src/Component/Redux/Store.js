import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import ReducersRoot from "./ReducersRoot/ReducersRoot";
import logger from "redux-logger";
const middlewares = [logger]
export const store = createStore(ReducersRoot,applyMiddleware(...middlewares))
export const persistor = persistStore(store);
export default {persistor,store}