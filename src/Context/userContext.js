import React, {createContext, useContext, useReducer, useState} from "react";
import {API_URL} from "../constants";

import useAxios from "@use-hooks/axios";
import {useAuth} from "./authContext";

const UserDataContext = createContext();

const UserDataProvider = (props) => {
    const [userData, setUserData] = useState(null);
    // const [username, setUsername] = useState();
    const {token, authDispatch, refreshToken, authRefreshDispatch} = useAuth();

    const refToken = useAxios({
        url: `${API_URL}/token/refresh/dj`,
        method: "POST",
        options: {
            data: refreshToken,
            headers: {
                // Authorization: `JWT ${refreshtoken}`,
            },
        },
        customHandler: (err, res) => {
            if (res) {
                console.log('refresh res: ', res.data);
                authDispatch({type: "LOGIN", token: res.data.access});
            }
            if (err) {
                console.log('refresh error: ', err.response);
                authDispatch({type: "LOGOUT", token});
                authRefreshDispatch({type: "LOGOUT", refreshToken});
            }
        },
    });

    const getUser = useAxios({
        url: `${API_URL}/user/`,
        options: {
            headers: {
                Authorization: `JWT ${token}`,
            },
        },
        trigger: token ? [] : undefined,
        customHandler: (err, res) => {
            if (res) {
                console.log("user res: ", res.data);
                setUserData(res.data);
            }
            if (err) {
                console.log("user err: ", err.response);

                if (refreshToken) {
                    refToken.reFetch()
                } else {
                    authDispatch({type: "LOGOUT"});
                    authRefreshDispatch({type: "LOGOUT", refreshToken});
                }
            }
        },
    });

    return (
        <>
            {token ? (
                <>
                    {getUser.response?.data && (
                        <UserDataContext.Provider value={{userData, getUser}} {...props}>
                            {props.children}
                        </UserDataContext.Provider>
                    )}
                </>
            ) : (
                <>
                    <UserDataContext.Provider value={{userData, getUser}} {...props}>
                        {props.children}
                    </UserDataContext.Provider>
                </>
            )}
        </>
    );
};

const useUserData = () => useContext(UserDataContext);

export {useUserData, UserDataProvider};
