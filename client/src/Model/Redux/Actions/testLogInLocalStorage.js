

export const signIn = (user) => {
    console.log(user.data)
    debugger
    return (dispatch, getState) => {
        dispatch({type:"LOG_IN_USER", role:user.data.role, fname:user.data.firstName, lname: user.data.lastName, dateOfBirth: user.data.dateOfBirth, email: user.data.email})
    }
}


export const testingSignOut = () => {


    return (dispatch, getState) => {
        dispatch({type:"LOG_OUT_USER"})
    }
}