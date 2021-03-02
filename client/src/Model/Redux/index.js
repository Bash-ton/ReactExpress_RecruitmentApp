import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { AllReducers } from "./Reducers"

/**
 * Config Used to persist the redux store
 * @type {{storage, key: string}}
 */
const persistConfig = {
    key: 'root',
    storage,
}
/**
 * A persisted combined reducer
 * @type {Reducer<CombinedState<{UserReducer: ({userInfo: {fname: (string|*), lname: (string|*), role: *, isLoggedIn: boolean, dateOfBirth: *, email: *}[]}|{userInfo: {fname: string, lname: string, role: null, isLoggedIn: boolean, dateOfBirth: string, email: string}[]}|{userInfo: {fname: (string|*), lname: (string|*), role: *, isLoggedIn: boolean, dateOfBirth: *, email: string}[]})}> & PersistPartial, unknown>}
 */
const persistedReducer = persistReducer(persistConfig, AllReducers)


export const ReduxStore = createStore(persistedReducer, applyMiddleware(thunk));
export const Persistor = persistStore(ReduxStore)
