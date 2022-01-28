import Cookies from "js-cookie";

export const AuthRefreshReducer = (state, action) => {
    // console.log('state in AuthRefreshReducer: ', state)
    // console.log('action in AuthRefreshReducer: ', action)
    switch (action.type) {
        case "LOGIN":
            // localStorage.setItem("refreshtoken", action.refreshtoken);
            Cookies.set("refreshToken", action.refreshToken)
            return action.refreshtoken;
        case "LOGOUT":
            // localStorage.removeItem("refreshToken");
            Cookies.remove("refreshToken")
            return null;
        default:
            return state;
    }
};