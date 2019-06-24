import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import {Movies} from "./Movies";

export const configureStore = () => {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const Store = createStore(
        combineReducers({ movies: Movies }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return Store;
}