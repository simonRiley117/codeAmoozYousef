import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "./Context/authContext";
import { ToastContainer } from "react-toastify";
import { UserDataProvider } from "./Context/userContext";
import ScrollToTop from "./Router/ScrollToTop";
import { CartDataProvider } from "@App/Context/cartContext";
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <AuthProvider>
        <UserDataProvider>
          <BrowserRouter>
            <ScrollToTop />

            <ToastContainer
              position="top-center"
              autoClose={4000}
              newestOnTop
              closeOnClick
              rtl
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <CartDataProvider>
              <App />
            </CartDataProvider>
          </BrowserRouter>
        </UserDataProvider>
      </AuthProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
