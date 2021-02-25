const initState =
    {
        userInfo: [
            {
                isLoggedIn: false,
                role: null,
                fname: "",
                lname: "",
                dateOfBirth: "",
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
                    }
                ]

            };
        case "SIGN_UP_USER":
            return {

                userInfo: [
                    {
                        isLoggedIn: true,
                        role: action.role,
                        fname: action.fname,
                        lname: action.lname,
                        dateOfBirth: action.dateOfBirth,
                    }
                ]

            };
            
        default:
            return state;

    }
}

export default UserReducer;