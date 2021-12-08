import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from '@Components/Shared/Layout/DashboardLayout';

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
import MyCourses from "./Layouts/Dashboard/MyCourses";
import Master from "@Layouts/CoWorkers/Master/Master";
import TechnicalTeam from "@Layouts/CoWorkers/TechnicalTeam";
import TechnicalTeams from "@Components/Layouts/CoWorkers/TechnicalTeam/TechnicalTeams";
import Employer from "@Layouts/CoWorkers/Employer/Employer";
import ShoppingCard from "./Layouts/ShoppingCard/ShoppingCard";
import Profile from "./Layouts/Profile/Profile";
import Resume from "./Layouts/resume/Resume";
import Rules from "./Layouts/Rules/Rules";
import CourseTopic from "./Layouts/Course topic/CourseTopic";
import Search from "./Layouts/Search/Search";
import Dashboard from "./Layouts/Dashboard/Dashboard";
import NewCourse from "./Layouts/Dashboard/NewCourse";
import Mysendes from "./Layouts/Dashboard/Mysendes";
import Transaction from "./Layouts/Dashboard/Transaction";
import PasswordChange from "./Layouts/Dashboard/Password";
import TeacherResume from "./Layouts/Teacher Resume/TeacherResume";
const Authenticated = () => {
  const history = useHistory();
  console.log("Authenticated ~ history", history);
import Example from './Layouts/Example';
import Quiz from './Layouts/Quiz';

import LastCourse from './Layouts/Dashboard/LastCourse';
import MyCourses from '@Layouts/Dashboard/MyCourses';

import Profile from './Layouts/Profile/Profile';
import Resume from './Layouts/resume/Resume';
import CourseTopic from './Layouts/CourseTopic/CourseTopic';
import Dashboard from './Layouts/Dashboard/Dashboard';

const Authenticated = () => {
	return (
		<Routes>
			<Route element={<DashboardLayout />}>
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/dashboard/topic' element={<CourseTopic />} />
				<Route path='/dashboard/resume' element={<Resume />} />
				<Route path='/dashboard/profile' element={<Profile />} />
				<Route path='/dashboard/my-course' element={<MyCourses />} />
				<Route path='/dashboard/course' element={<LastCourse />} />
				<Route path='/dashboard/course/example' element={<Example />} />
				<Route path='/dashboard/course/quiz' element={<Quiz />} />

				{/* <Route path='*'>{() => <Redirect to='/dashboard' />}</Route> */}
			</Route>
		</Routes>
	);
};

export default Authenticated;
