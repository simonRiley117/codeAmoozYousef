import React, {createContext, useReducer} from "react";
import {authReducer} from "../reducers/AuthReducer";
import Cookies from "js-cookie";
import {AuthRefreshReducer} from "../reducers/AuthRefreshReducer";

const AuthContext = createContext();

const AuthProvider = (props) => {
    //   var decoded = jwt_decode(token);
    const [token, authDispatch] = useReducer(
        authReducer,

        // localStorage.getItem("token")
        Cookies.get("token")
    );

    const [refreshToken, authRefreshDispatch] = useReducer(
        AuthRefreshReducer,
        // localStorage.getItem("refreshToken")
        Cookies.get("refreshToken")
    );

    return (
        <AuthContext.Provider value={{token, refreshToken, authRefreshDispatch, authDispatch}} {...props}>
            {props.children}
        </AuthContext.Provider>
    );
};

const useAuth = () => React.useContext(AuthContext);

export {AuthProvider, useAuth};
