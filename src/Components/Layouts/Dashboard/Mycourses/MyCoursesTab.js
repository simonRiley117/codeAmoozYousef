import React from 'react';
import { Tabs } from 'antd';
import MyCourseCard from './MyCourseCard';
const { TabPane } = Tabs;

const MyCoursesTab = ({handleModalShow}) => {
	return (
		<div className='MyCourses__Tab'>
			<Tabs className='MyCoursesTab__TabBox TabBox' type='card'>
				<TabPane tab='دوره های درحال گذراندن' key='1'>
					<MyCourseCard handleModalShow={handleModalShow} finishedCourse={false}/>
				</TabPane>
				<TabPane tab='دوره های تکمیل شده ' key='2'>
					<MyCourseCard handleModalShow={handleModalShow} finishedCourse={true} />
				</TabPane>
			</Tabs>
		</div>
	);
 
};

export default MyCoursesTab;
