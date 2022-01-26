import React, { useState } from 'react';
import Courses from '@Components/Layouts/Dashboard/Courses';
import Messages from '@Components/Layouts/Dashboard/Messages';
import Suggested from '@Components/Layouts/Dashboard/Suggested';
import SuggestCourse from '@Components/Layouts/Dashboard/SuggestCourse';
import TeacherLogin from '@Components/Layouts/Dashboard/TeacherLogin';
import Pdf from '../../Assets/Images/Icons/tutorialpdf.svg';
import Vid from '../../Assets/Images/Icons/tutorialvid.svg';
import useFetch from '../../Context/useFetch';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	const [dashboardInfo, setDashboardInfo] = useState(null);
	console.log('Dashboard ~ dashboardInfo', dashboardInfo);
	const [dashboardLoading, setDashboardLoading] = useState(true);

	const setData = (data) => {
		setDashboardInfo(data);
		setDashboardLoading(false);
	};

	const getDashboardInfo = useFetch({
		url: `StudentService/dashboard`,
		method: 'GET',
		setter: setData,
	});

	return (
		<>
			<section className='dashboard-container '>
				<div className='dashboard'>
					<h2 className='dashboard__title'>{`سلام ${
						dashboardInfo?.first_name || ''
					}، خوش اومدی!`}</h2>
					<div className='dashboard__course flex items-stretch gap-x-8 w-full'>
						<Courses course={dashboardInfo?.latest_course} />
						<SuggestCourse />
					</div>

					<section className='dashboard__login-wrapper flex flex-col'>
						<TeacherLogin />
					</section>
					<section className='dashboard__message'>
						<Messages messages={dashboardInfo?.latest_messages} />
					</section>
					<section className='dashboard__suggested'>
						<Suggested suggestions={dashboardInfo?.suggestion_courses} />
					</section>
				</div>
			</section>
		</>
	);
};

export default Dashboard;
