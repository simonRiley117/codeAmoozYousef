import React, { useState } from "react";
import { API_URL } from "./constants";
import useAxios from "@use-hooks/axios";
import {
<<<<<<< HEAD
	BrowserRouter as Router,
	Route,
	Switch,
	useHistory,
} from 'react-router-dom';
import Layout from '@Components/Shared/Layout/Layout';
import News from '@Layouts/News';
import CoWorkersRouter from './Router/CoWorkersRouter';
import NewsDetails from './Layouts/News/NewsDetails';
import Faq from './Layouts/Faq';
import Contact from './Layouts/Contact us';
import Courses from './Layouts/Courses';
import Course from './Layouts/Course';
import AboutUs from './Layouts/About us';
import Example from './Layouts/Example';
import SabadKala from './Layouts/Sabadkala/SabadKala';
import { UserDataProvider } from './Context/userContext';
import Dashboard from './Layouts/Dashboard/Dashboard';
import Home from './Layouts/Home';
=======
  BrowserRouter as Router,
  Route,
  Switch,
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
import Dashboard from "./Layouts/Dashboard/Dashboard";
import Home from "./Layouts/Home";
import LastCourse from "./Layouts/Teacher/LastCourse";
import Master from "@Layouts/CoWorkers/Master/Master";
import TechnicalTeam from "@Layouts/CoWorkers/TechnicalTeam";
import TechnicalTeams from "@Components/Layouts/CoWorkers/TechnicalTeam/TechnicalTeams";
import Employer from "@Layouts/CoWorkers/Employer/Employer";
>>>>>>> e0916998f392676be2453f71b9b80538d61129a6

const Authenticated = () => {
  const history = useHistory();
  console.log("Authenticated ~ history", history);

<<<<<<< HEAD
	return (
		<>
			<UserDataProvider>
				<Switch>
					<Layout>
						<Route
							exact
							path='/dashboard/:redirectToTeacher?'
							component={Home}
						/>
						<Route exact path='/coWorkers'>
							<CoWorkersRouter />
						</Route>
						<Route exact path='/news' component={News} />
						<Route
							exact
							path='/news/news-info'
							component={NewsDetails}
						/>
						<Route exact path='/faq' component={Faq} />
						<Route exact path='/contact-us' component={Contact} />
						<Route exact path='/about-me' component={AboutUs} />
						<Route exact path='/courses' component={Courses} />
						<Route
							exact
							path='/course'
							render={(routeProps) => (
								<Course key={routeProps.history.location.state.id} />
							)}
						/>
						<Route exact path='/example' component={Example} />
						<Route exact path='/sabad-kala' component={SabadKala} />
						<Route exact path="/dash" component={Dashboard} />
=======
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
            <Route exact path="/coWorkers/technicalteam" component={TechnicalTeam} />
            <Route exact path="/coWorkers/technicalteam/:name" component={TechnicalTeams} />
            <Route exact path="/coWorkers/employer" component={Employer} />
            <Route exact path="/news/news-info" component={NewsDetails} />
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
            <Route exact path="/example" component={Example} />
            <Route exact path="/dash" component={Dashboard} />
            <Route exact path="/dash/course" component={LastCourse} />
>>>>>>> e0916998f392676be2453f71b9b80538d61129a6

            {/* <Route path='*'>{() => <Redirect to='/dashboard' />}</Route> */}
          </Layout>
        </Switch>
      </UserDataProvider>
    </>
  );
};

export default Authenticated;
