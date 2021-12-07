import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from '@Components/Shared/Layout/DashboardLayout';

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
