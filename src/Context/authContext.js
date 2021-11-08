import React, { createContext, useReducer } from "react";
import { authReducer } from "../reducers/AuthReducer";

const AuthContext = createContext();

const AuthProvider = (props) => {
  //   var decoded = jwt_decode(token);
  const [token, authDispatch] = useReducer(
    authReducer,

    localStorage.getItem("token")
  );

  return (
    <AuthContext.Provider value={{ token, authDispatch }} {...props}>
      {props.children}
    </AuthContext.Provider>
  );
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
