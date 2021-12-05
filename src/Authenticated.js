import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '@Components/Shared/Layout/Layout';

import News from '@Layouts/News';
// import CoWorkersRouter from './Router/CoWorkersRouter';
import NewsDetails from './Layouts/News/NewsDetails';
import Faq from './Layouts/Faq';
import Contact from './Layouts/Contact us';
import Courses from './Layouts/Courses';
import Course from './Layouts/Course';
import AboutUs from './Layouts/About us';
import Example from './Layouts/Example';
import Quiz from './Layouts/Quiz';
import Favorites from './Layouts/Favorites/Favorites';
import Home from './Layouts/Home';
import LastCourse from './Layouts/Dashboard/LastCourse';
import MyCourses from './Layouts/Dashboard/MyCourses';
import Master from '@Layouts/CoWorkers/Master/Master';
import TechnicalTeam from '@Layouts/CoWorkers/TechnicalTeam';
import TechnicalTeams from '@Components/Layouts/CoWorkers/TechnicalTeam/TechnicalTeams';
import Employer from '@Layouts/CoWorkers/Employer/Employer';
import ShoppingCard from './Layouts/ShoppingCard/ShoppingCard';
import Profile from './Layouts/Profile/Profile';
import Resume from './Layouts/resume/Resume';
import Rules from './Layouts/Rules/Rules';
import CourseTopic from './Layouts/Course topic/CourseTopic';
import Search from './Layouts/Search/Search';
import Dashboard from './Layouts/Dashboard/Dashboard';

const Authenticated = () => {
	return (
		<>
				<Layout>
					<Routes>
					
						{/* <Route path='/coWorkers'>
							<CoWorkersRouter />
						</Route> */}
						<Route path='/news' element={<News />} />
						<Route path='/coWorkers/master' element={<Master />} />
						<Route
							path='/coWorkers/technicalteam'
							element={<TechnicalTeam />}
						/>
						<Route
							path='/coWorkers/technicalteam/:name'
							element={<TechnicalTeams />}
						/>
						<Route path='/coWorkers/employer' element={<Employer />} />
						<Route path='/news/news-info' element={<NewsDetails />} />
						<Route path='/faq' element={<Faq />} />
						<Route path='/contact-us' element={<Contact />} />
						<Route path='/about-me' element={<AboutUs />} />
						<Route path='/courses' element={<Courses />} />
						<Route path='/shopping-card' element={<ShoppingCard />} />
						<Route path='/search/:name' element={<Search />} />

						<Route
							path='/course'
							render={(routeProps) => (
								<Course key={routeProps.history.location.state.id} />
							)}
						/>
						<Route path='/rules' element={<Rules />} />
						<Route path='/topic' element={<CourseTopic />} />
						<Route path='/fav' element={<Favorites />} />
						<Route path='/resume' element={<Resume />} />
						<Route path='/example' element={<Example />} />
						<Route path='/profile' element={<Profile />} />
						<Route path='/dash' element={<Dashboard />} />
						<Route path='/dash/course' element={<LastCourse />} />
						<Route path='/dash/my-course' element={<MyCourses />} />
						<Route path='/dash/example' element={<Example />} />
						<Route path='/dash/quiz' element={<Quiz />} />

						{/* <Route path='*'>{() => <Redirect to='/dashboard' />}</Route> */}
					</Routes>
				</Layout>
		</>
	);
};

export default Authenticated;
