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
        case "SIGN_UP_USER"://TODO remove this
            return {

                userInfo: [
                    {
                        isLoggedIn: true,
                        role: action.role,
                        fname: action.fname,
                        lname: action.lname,
                        dateOfBirth: action.dateOfBirth,
                        email: "",
                    }
                ]

            };
            
        default:
            return state;

    }
}

export default UserReducer;