import React from "react";
import { Routes, Route } from "react-router-dom";
import Quiz from "./Layouts/Quiz";
import EmailVerify from "./Components/Layouts/Register/EmailVerify";
import ChangePassword from "./Components/Layouts/Register/ChangePassword";
import Layout from "@Components/Shared/Layout/Layout";

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
       <Route element={<Layout />}>
       <Route path="/dashboard/course/quiz" element={<Quiz />} />
        </Route>
     
    </Routes>
  );
};
export default UnAuthenticated;
