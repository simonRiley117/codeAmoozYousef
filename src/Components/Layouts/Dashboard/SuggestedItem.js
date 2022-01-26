import React from 'react';
import { Link } from 'react-router-dom';

const SuggestedItem = ({ course_cover, course_title, course_teacher }) => {
	return (
		<div className=' dashboard__suggested--item flex items-center gap-x-6'>
			<img
				src={course_cover}
				alt={course_title}
				className='image object-cover'
			/>
			<div className='flex flex-col gap-y-6'>
				<Link to='/'>{course_title}</Link>
				<p>{course_teacher}</p>
			</div>
		</div>
	);
};
export default SuggestedItem;
