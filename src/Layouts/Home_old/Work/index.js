import React from 'react';
import Title from '@Components/Shared/Title';
import WorkItem from './WorkItem';

import { ReactComponent as TestIcon } from '@Assets/Icons/work-test.svg';
import { ReactComponent as ProjectIcon } from '@Assets/Icons/work-project.svg';
import { ReactComponent as CourseIcon } from '@Assets/Icons/work-course.svg';
import { ReactComponent as PracticeIcon } from '@Assets/Icons/work-practice.svg';

const Work = () => {
	return (
		<section className='home__work'>
			<div className='container'>
				<Title>ویژگی های کدآموز</Title>
				<div className='home__work--wrapper'>
					<div className='home__work--content'>
						<WorkItem icon={<TestIcon />}>
							تست تمرین و مرحله بعدی
						</WorkItem>
						<WorkItem icon={<ProjectIcon />}>
							تکمیل پروژه و پایان آموزش
						</WorkItem>
						<WorkItem icon={<CourseIcon />}>
							انتخاب و مشاهده دوره
						</WorkItem>
						<WorkItem icon={<PracticeIcon />}>
							تمرین آنلاین و ارزشیابی هوشمند
						</WorkItem>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Work;
 