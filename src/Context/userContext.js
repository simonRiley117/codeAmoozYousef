import React, { createContext, useContext, useReducer, useState } from "react";
import { API_URL } from "../constants";

import useAxios from "@use-hooks/axios";
import { useAuth } from "./authContext";

const UserDataContext = createContext();

const UserDataProvider = (props) => {
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState();
  const { token, authDispatch } = useAuth();

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
      }
      if (err) {
        authDispatch({ type: "LOGOUT" });
      }
    },
  });

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
