import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Layout from '@Components/Shared/Layout/Layout';
// ----------------- Pages -----------------
import News from '@Layouts/News';
import Home from '../Layouts/Home';
import CoWorkersRouter from './CoWorkersRouter';
import NewsDetails from '../Layouts/News/NewsDetails';
import Faq from '../Layouts/Faq';
import Contact from '../Layouts/Contact us';
import Courses from '../Layouts/Courses';
import Course from '../Layouts/Course';
import AboutUs from '../Layouts/About us';

const Router = () => {
	return (
		<Switch>
			<Layout>
				<Route exact path='/' component={Home} />
				<Route path='/coWorkers'>
					<CoWorkersRouter />
				</Route>
				<Route exact path='/news' component={News} />
				<Route exact path='/news/NewsDetails' component={NewsDetails} />
				<Route exact path='/faq' component={Faq} />
				<Route exact path='/contact-us' component={Contact} />
				<Route exact path='/about-me' component={AboutUs} />
				<Route exact path='/courses' component={Courses} />
				<Route exact path='/course' component={Course} />
				{/* <Route path='*'>
					{() => (
						<Redirect
							to={{
								pathname: '/',
							}}
						/>
					)}
				</Route> */}
			</Layout>
		</Switch>
	);
};
export default Router;
