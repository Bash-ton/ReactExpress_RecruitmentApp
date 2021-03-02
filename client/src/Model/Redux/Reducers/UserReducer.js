const initState =
    {
        userInfo: [
            {
                isLoggedIn: false,
                role: null,
                fname: "",
                lname: "",
                dateOfBirth: "",
                email: "",
            }
        ]
    }
/**
 * A reducer that handles login and signup
 * @param state the current state of this reducer
 * @param action the action that is to be performed
 * @returns {{userInfo: [{fname: string|*, lname: string|*, role: *, isLoggedIn: boolean, dateOfBirth: *, email: *}]}}
 */
const UserReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOG_IN_USER":
            return {

                userInfo: [
                    {
                        isLoggedIn: true,
                        role: action.role,
                        fname: action.fname,
                        lname: action.lname,
                        dateOfBirth: action.dateOfBirth,
                        email: action.email,
                    }
                ]

            };
        case "LOG_OUT_USER":
            return {

                userInfo: [
                    {
                        isLoggedIn: false,
                        role: null,
                        fname: "",
                        lname: "",
                        dateOfBirth: "",
                        email: "",
                    }
                ]

            };
        default:
            return state;

    }
}

export default UserReducer;