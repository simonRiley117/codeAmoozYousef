import React, { useState } from "react";
import { API_URL } from "./constants";
import useAxios from "@use-hooks/axios";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import Layout from "@Components/Shared/Layout/Layout";
import News from "@Layouts/News";
import CoWorkersRouter from "./Router/CoWorkersRouter";
import NewsDetails from "./Layouts/News/NewsDetails";
import Faq from "./Layouts/Faq";
import Contact from "./Layouts/Contact us";
import Courses from "./Layouts/Courses";
import Course from "./Layouts/Course";
import AboutUs from "./Layouts/About us";
import Example from "./Layouts/Example";
import { UserDataProvider } from "./Context/userContext";
import Favorites from "./Layouts/Favorites/Favorites";
import Home from "./Layouts/Home";

const Authenticated = () => {
  const history = useHistory();

  return (
    <>
      <UserDataProvider>
        <Switch>
          <Layout>
            <Route
              exact
              path="/dashboard/:redirectToTeacher?"
              component={Home}
            />
            <Route exact path="/coWorkers">
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
              path="/course"
              render={(routeProps) => (
                <Course key={routeProps.history.location.state.id} />
              )}
            />
            <Route exact path="/fav" component={Favorites} />
            <Route exact path="/example" component={Example} />
          </Layout>
          <Route path="*">{() => <Redirect to="/" />}</Route>
        </Switch>
      </UserDataProvider>
    </>
  );
};

export default Authenticated;
