import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Layouts/Home";
import CoWorkersRouter from "./Router/CoWorkersRouter";
import NewsDetails from "./Layouts/News/NewsDetails";
import Faq from "./Layouts/Faq";
import Contact from "./Layouts/Contact us";
import Courses from "./Layouts/Courses";
import AboutUs from "./Layouts/About us";
import News from "./Layouts/News";
import Layout from "@Components/Shared/Layout/Layout";
import { UserDataProvider } from "./Context/userContext";
import EmailVerify from "./Components/Layouts/Register/EmailVerify";

const UnAuthenticated = () => {
  return (
    <>
      <UserDataProvider>
        <Switch>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/coWorkers">
              <CoWorkersRouter />
            </Route>
            <Route exact path="/news" component={News} />
            <Route exact path="/news/NewsDetails" component={NewsDetails} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/contact-us" component={Contact} />
            <Route exact path="/about-me" component={AboutUs} />
            <Route exact path="/courses" component={Courses} />
            <Route
              exact 
              path="/account-confirm-email/:confirmedkey"
              component={EmailVerify}
            />
            {/* <Route path="*">{() => <Redirect to={{ pathname: "/" }} />}</Route> */}
          </Layout>
        </Switch>
      </UserDataProvider>
    </>
  );
};

export default UnAuthenticated;
