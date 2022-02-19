import React from "react";
import {Routes, Route} from "react-router-dom";
import Quiz from "./Layouts/Quiz";
import EmailVerify from "./Components/Layouts/Register/EmailVerify";
import ChangePassword from "./Components/Layouts/Register/ChangePassword";
import Layout from "@Components/Shared/Layout/Layout";
import SocialAuth from "@Layouts/SocialAuth/SocialAuth";
import Example from "./Layouts/Example";

const UnAuthenticated = () => {
    return (
        <Routes>
            <Route
                path="/account-confirm-email/:confirmedkey"
                element={<EmailVerify/>}
            />
            <Route
                path="/auth/password/reset/confirm/:uuid/:key/"
                element={<ChangePassword/>}
            />
         <Route path="/quiz" element={<Quiz />} />
        <Route path="example" element={<Example />} />
            <Route>
                <Route path="/social-confirm/:Token/:refToken" element={<SocialAuth/>}/>
            </Route>
        </Routes>
    );
};
export default UnAuthenticated;
