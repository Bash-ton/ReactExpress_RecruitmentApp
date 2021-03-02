import { combineReducers } from "redux";
import UserReducer from "./UserReducer";

/**
 * This component combines all reducers in this Redux store
 * @type {Reducer<CombinedState<{UserReducer: ({userInfo: [{fname: string|*, lname: string|*, role: *, isLoggedIn: boolean, dateOfBirth: *, email: *}]}|{userInfo: [{fname: string, lname: string, role: null, isLoggedIn: boolean, dateOfBirth: string, email: string}]}|{userInfo: [{fname: string|*, lname: string|*, role: *, isLoggedIn: boolean, dateOfBirth: *, email: string}]}|{userInfo: [{fname: string, lname: string, role: null, isLoggedIn: boolean, dateOfBirth: string, email: string}]})}>>}
 */
export const AllReducers = combineReducers({
    UserReducer
})