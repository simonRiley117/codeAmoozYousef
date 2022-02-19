import React, { useState } from 'react';
import _ from 'lodash';
import { useUserData } from '@App/Context/userContext';
import DashboardBox from './DashboardBox';
import { Link as LinkBase } from 'react-router-dom';
import { ReactComponent as CourseEmptyIcon } from '@Assets/Icons/course-empty.svg';
import Link from '@Components/Shared/Buttons/Link';
import ProgressLine from '@Components/Shared/Progress/ProgressLine';

import profile from '@Assets/Pic/course-profile.png';
const Courses = ({ course }) => {
	const { userData } = useUserData();
	const renderCourseEmpty = () => (
		<div className='dashboard__course--empty'>
			<CourseEmptyIcon />
			<p>
				هنوز هیچ دوره ای ثبت نام نکردی؟!
				<br />
				وقتشه دست به کار شی
			</p>

			<Link to='/courses'> دوره‌ها</Link>
		</div>
	);
	return (
		<DashboardBox title='آخرین دوره شما:' classes='dashboard__course--box flex-auto'>
			{_.isEmpty(course) ? (
				renderCourseEmpty()
			) : (
				<article className='dashboard__course--item flex '>
					<div className='dashboard__course--item-cover'>
						<img
							src={course.cover}
							alt={course.title}
							className='image object-cover'
						/>
					</div>
					<div className='dashboard__course--item-content flex  flex-col gap-y-2'>
						<LinkBase
							to='/coursecontent'
							state={{
								name: course?.title,
								id: course?.uuid,
							}}
						>
							{course.title}
						</LinkBase>

						<div className='flex  flex-col gap-y-2'>
							<div className='flex items-center gap-3'>
								<span className='font-semibold'>
									پیشرفت شما در دوره:
								</span>
								<span className=' ml-4'>
									{' '}
									{course.season_numbers} جلسه
								</span>
								<span className='text-primary'>
									{' '}
									{course.progresses}%
								</span>
							</div>
							<ProgressLine precent={course.progresses} />
						</div>
						<div className='flex items-center gap-5 dashboard__course--item-teacher'>
							<img
								src={course.teacher_avatar}
								alt={course.teacher_first_name}
								className='image'
							/>
							<span>
								{`${course.teacher_first_name} ${course.teacher_last_name}`}
							</span>
						</div>
					</div>
				</article>
			)}
		</DashboardBox>
	);
};

export default Courses;
