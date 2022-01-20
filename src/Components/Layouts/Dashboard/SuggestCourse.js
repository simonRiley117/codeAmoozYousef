import React from 'react';
import Suggest from '@Assets/Pic/Suggest.png';
import { Link } from 'react-router-dom';

const SuggestCourse = () => {
	return (
		<div className='dashboard__suggest flex flex-col items-center justify-center gap-y-8'>
			<img src={Suggest} alt='پیشنهاد' />

			<Link to='/dashboard/suggest'>پیشنهاد دوره جدید</Link>
		</div>
	);
};
export default SuggestCourse;
