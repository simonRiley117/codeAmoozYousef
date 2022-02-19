import React, { createContext, useContext, useReducer, useState } from "react";
import { API_URL } from "../constants";

import useAxios from "@use-hooks/axios";
import { useAuth } from "./authContext";
import { tourguid } from "@App/Recoil/StateRecoil";
import { useRecoilState } from "recoil";

const UserDataContext = createContext();

const UserDataProvider = (props) => {
  const [userData, setUserData] = useState(null);
  // const [username, setUsername] = useState();
  const {
    token,
    authDispatch,
    refreshToken,
    authRefreshDispatch,
    setShowGuid,
  } = useAuth();
  const [showguid, setShowguid] = useRecoilState(tourguid);

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
        authDispatch({ type: "LOGIN", token: res.data.access });
      }
      if (err) {
        authDispatch({ type: "LOGOUT" });
        authRefreshDispatch({ type: "LOGOUT" });
        // authDispatch({ type: "LOGOUT", token });
        // authRefreshDispatch({ type: "LOGOUT", refreshToken });
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
        setUserData(res.data);
        if (!res.data.tool_gide) {
          setShowGuid(!res.data.tool_gide);
        }
      }
      if (err) {

        if (refreshToken) {
          refToken.reFetch();
        } else {
          authDispatch({ type: "LOGOUT" });
          // authRefreshDispatch({ type: "LOGOUT", refreshToken });
          authRefreshDispatch({ type: "LOGOUT"});
        }
      }
    },
  });
  // console.log(`showguid`, showguid);
  return (
    <>
      {token ? (
        <>
          {getUser.response?.data && (
            <UserDataContext.Provider value={{ userData, getUser }} {...props}>
              {props.children}
            </UserDataContext.Provider>
          )}
        </>
      ) : (
        <>
          <UserDataContext.Provider value={{ userData, getUser }} {...props}>
            {props.children}
          </UserDataContext.Provider>
        </>
      )}
    </>
  );
};

const useUserData = () => useContext(UserDataContext);

export { useUserData, UserDataProvider };
