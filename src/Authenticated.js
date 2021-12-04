import React, { useState } from "react";
import { API_URL } from "./constants";
import useAxios from "@use-hooks/axios";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { UserDataProvider } from "./Context/userContext";
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
import Quiz from "./Layouts/Quiz";
import Favorites from "./Layouts/Favorites/Favorites";
import Home from "./Layouts/Home";
import LastCourse from "./Layouts/Dashboard/LastCourse";
import Master from "@Layouts/CoWorkers/Master/Master";
import TechnicalTeam from "@Layouts/CoWorkers/TechnicalTeam";
import TechnicalTeams from "@Components/Layouts/CoWorkers/TechnicalTeam/TechnicalTeams";
import Employer from "@Layouts/CoWorkers/Employer/Employer";
import ShoppingCard from "./Layouts/ShoppingCard/ShoppingCard";
import Profile from "./Layouts/Profile/Profile";
import Resume from "./Layouts/resume/Resume";
import Rules from "./Layouts/Rules/Rules";
import Search from "./Layouts/Search/Search";
import Dashboard from "./Layouts/Dashboard/Dashboard";

const Authenticated = () => {
  const history = useHistory();
  console.log("Authenticated ~ history", history);

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
            <Route exact path="/coWorkers/master" component={Master} />
            <Route
              exact
              path="/coWorkers/technicalteam"
              component={TechnicalTeam}
            />
            <Route
              exact
              path="/coWorkers/technicalteam/:name"
              component={TechnicalTeams}
            />
            <Route exact path="/coWorkers/employer" component={Employer} />
            <Route exact path="/news/news-info" component={NewsDetails} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/contact-us" component={Contact} />
            <Route exact path="/about-me" component={AboutUs} />
            <Route exact path="/courses" component={Courses} />
            <Route exact path="/shopping-card" component={ShoppingCard} />
            <Route exact path="/search/:name" component={Search} />


            <Route
              exact
              path="/course"
              render={(routeProps) => (
                <Course key={routeProps.history.location.state.id} />
              )}
            />
            <Route exact path="/rules" component={Rules} />
            <Route exact path="/fav" component={Favorites} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/example" component={Example} />
            <Route exact path="/profile" component={Profile} />
             <Route exact path="/dash" component={Dashboard} />
            <Route exact path="/dash/course" component={LastCourse} />
            <Route exact path="/dash/example" component={Example} />
            <Route exact path="/dash/quiz" component={Quiz} />

            {/* <Route path='*'>{() => <Redirect to='/dashboard' />}</Route> */}
          </Layout>
        </Switch>
      </UserDataProvider>
    </>
  );
};

export default Authenticated;
