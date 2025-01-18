import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootSaga from "./sagas/rootSaga.js";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/rootReducer.js";
const sagaMiddleware = createSagaMiddleware();


const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
export { store };
sagaMiddleware.run(rootSaga);