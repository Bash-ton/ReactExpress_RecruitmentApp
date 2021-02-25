export const testing = () => {
    return (dispatch, getState) => {
        dispatch({type:"LOG_IN_USER", role:"admin", fname:"seb", lname:"paz", dateOfBirth: "2020-12-12"})
    }
}

export const signUP = (user) => {
    console.log(user);

    return (dispatch, getState) => {
        dispatch({type:"SIGN_UP_USER", role: "client", fname: user.firstName, lname: user.lastName, dateOfBirth: user.dateOfBirth})
    }
}

export const testingSignOut = () => {


    return (dispatch, getState) => {
        dispatch({type:"LOG_OUT_USER"})
    }
}