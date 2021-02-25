import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { AllReducers } from "./Reducers"

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, AllReducers)


export const ReduxStore = createStore(persistedReducer, applyMiddleware(thunk));
export const Persistor = persistStore(ReduxStore)
