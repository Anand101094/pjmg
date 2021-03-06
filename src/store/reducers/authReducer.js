const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            console.log("Login success")
            return {
                ...state,
                authError: null
            }
        case "LOGIN_ERROR":
            console.log("Login error")
            return {
                ...state,
                authError: "Login Failed"
            }
        case "SIGNOUT_SUCCESS":
            console.log("Signout success")
            return state;
        case "SIGNOUT_SUCCESS":
            console.log("Signout success")
            return state;
        case "SIGNUP_SUCCESS":
            console.log("Signup success")
            return {
                ...state,
                authError: null
            }
        case "SIGNUP_Error":
            console.log("Signup err")
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}

export default authReducer