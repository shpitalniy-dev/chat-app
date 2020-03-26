import React from "react";
import ReactDOM from "react-dom";
import Layout from "./modules/Layout/index";
import './styles/index.less';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./rootReducer/rootReducer";
import rootSaga from './sagas/rootSaga.js';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>, document.getElementById("root"));
