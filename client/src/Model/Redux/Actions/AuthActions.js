/**
 * Redux action for signup
 * @param user object containing user information
 * @returns {function(*, *): void} a dispatch call to {UserReducer}
 */
export const signIn = (user) => {
    console.log(user.data)
    debugger
    return (dispatch, getState) => {
        dispatch({type:"LOG_IN_USER", role:user.data.role, fname:user.data.firstName, lname: user.data.lastName, dateOfBirth: user.data.dateOfBirth, email: user.data.email})
    }
}

/**
 * Redux action that sing out a user
 * @returns {function(*, *): void} a dispatch call to {UserReducer}
 */
export const signOut = () => {
    return (dispatch, getState) => {
        dispatch({type:"LOG_OUT_USER"})
    }
}