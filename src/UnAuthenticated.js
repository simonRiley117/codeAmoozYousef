import React from "react";
import { Routes, Route } from "react-router-dom";

import EmailVerify from "./Components/Layouts/Register/EmailVerify";
import ChangePassword from "./Components/Layouts/Register/ChangePassword";
import { CreateHead } from "./Head/Head";

const UnAuthenticated = () => {
  return (
    <>
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
      <CreateHead
        title="کدآموز-آموزش تعاملی آنلاین برنامه نویسی"
        description="This page is super important"
      />
    </>
  );
};
export default UnAuthenticated;
