import React from "react";
import { Routes, Route } from "react-router-dom";

import EmailVerify from "./Components/Layouts/Register/EmailVerify";
import ChangePassword from "./Components/Layouts/Register/ChangePassword";

const UnAuthenticated = () => {
  return (
    <Routes>
      <Route
        path="/account-confirm-email/:confirmedkey"
        element={<EmailVerify />}
      />
      <Route
        path="/auth/password/reset/confirm/:uuid/:key/"
        element={<ChangePassword />}
      />
    </Routes>
  );
};
export default UnAuthenticated;
