import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Redirect,
} from 'react-router-dom';
import Home from './Layouts/Home';
import CoWorkersRouter from './Router/CoWorkersRouter';
import NewsDetails from './Layouts/News/NewsDetails';
import Faq from './Layouts/Faq';
import Contact from './Layouts/Contact us';
import Courses from './Layouts/Courses';
import AboutUs from './Layouts/About us';
import News from './Layouts/News';
import Layout from '@Components/Shared/Layout/Layout';
import EmailVerify from './Components/Layouts/Register/EmailVerify';
import Course from './Layouts/Course';
import Favorites from './Layouts/Favorites/Favorites';
import Example from './Layouts/Example';
import Search from './Layouts/Search/Search';
import Master from '@Layouts/CoWorkers/Master/Master';
import TechnicalTeams from '@Components/Layouts/CoWorkers/TechnicalTeam/TechnicalTeams';
import Employer from '@Layouts/CoWorkers/Employer/Employer';

const UnAuthenticated = () => {
	return (
		<>
				<Layout>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/coWorkers/master' element={<Master />} />

						<Route
							path='/coWorkers/technicalteam/:name'
							element={<TechnicalTeams />}
						/>
						<Route path='/coWorkers/employer' element={<Employer />} />
						<Route path='/news' element={<News />} />
						{/* <Route
							path='/news/news-info'
							render={(routeProps) => (
								<NewsDetails
									key={routeProps.history.location.state.id}
								/>
							)}
						/> */}
						<Route path='/faq' element={<Faq />} />
						<Route path='/contact-us' element={<Contact />} />
						<Route path='/about-me' element={<AboutUs />} />
						<Route path='/courses' element={<Courses />} />
						<Route path='/search/:name' element={<Search />} />
						{/* <Route
							path='/course'
							render={(routeProps) => (
								<Course key={routeProps.history.location.state.id} />
							)}
						/> */}
						<Route path='/fav' element={<Favorites />} />
						<Route path='/example' element={<Example />} />

						<Route
							path='/account-confirm-email/:confirmedkey'
							element={<EmailVerify />}
						/>
						{/* <Route path="*">{() => <Redirect to={{ pathname: "/" }} />}</Route> */}
					</Routes>
				</Layout>
		</>
	);
};
export default UnAuthenticated;
