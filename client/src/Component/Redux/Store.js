import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import ReducersRoot from "./ReducersRoot/ReducersRoot";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];
export const store = createStore(ReducersRoot, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);

export default persistor;
