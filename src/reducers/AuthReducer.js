import { HOME_URL } from "@App/constants";
import Cookies from "js-cookie";

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      // localStorage.setItem("token", action.token);
      Cookies.set("token", action.token, { domain: HOME_URL ,secure: true });

      return action.token;
    case "LOGOUT":
      // localStorage.removeItem("token");
      Cookies.remove("token", { path: "/", domain: HOME_URL });

      return null;
    default:
      return state;
  }
};
