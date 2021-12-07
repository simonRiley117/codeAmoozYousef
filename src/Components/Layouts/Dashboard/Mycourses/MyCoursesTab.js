import React from 'react';
import { Tabs } from 'antd';
import MyCourseCard from './MyCourseCard';
const { TabPane } = Tabs;

const MyCoursesTab = () => {
	return (
		<div className='MyCourses__Tab'>
			<Tabs className='MyCoursesTab__TabBox TabBox' type='card'>
				<TabPane tab='دوره های درحال گذراندن' key='1'>
					<MyCourseCard />
				</TabPane>
				<TabPane tab='دوره های تکمیل شده ' key='2'>
					<MyCourseCard finishedCourse={true} />
				</TabPane>
			</Tabs>
		</div>
	);

};

export default MyCoursesTab;
