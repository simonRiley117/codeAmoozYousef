import React from 'react';
import DashboardBox from './DashboardBox';
import SuggestedItem from './SuggestedItem';
import Link from '@Components/Shared/Buttons/Link';

const Suggested = ({ suggestions = [] }) => {
	return (
		<DashboardBox
			title='آخرین دوره‌های پیشنهادی:'
			classes='dashboard__message--box'
		>
			<div className='flex flex-col gap-y-2 mt-4'>
				{suggestions.map((course) => (
					<SuggestedItem {...course} key={course.course_uuid} />
				))}
			</div>
		</DashboardBox>
	);
};

export default Suggested;
