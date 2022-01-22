import React from 'react';
import DashboardBox from './DashboardBox';
import SuggestedItem from './SuggestedItem';
import Link from '@Components/Shared/Buttons/Link';
import _ from 'lodash';

const Suggested = ({ suggestions = [] }) => {
	const renderSuggestionsEmpty = () => (
		<div className='flex flex-col items-center justify-center flex-auto gap-y-8'>
			<p>در حال حاضر پیشنهادی وجود ندارد</p>
		</div>
	);
	return (
		<DashboardBox
			title='آخرین دوره‌های پیشنهادی:'
			classes='dashboard__message--box'
		>
			{_.isEmpty(suggestions) ? (
				renderSuggestionsEmpty()
			) : (
				<div className='flex flex-col gap-y-2 mt-4'>
					{suggestions.map((course) => (
						<SuggestedItem {...course} key={course.course_uuid} />
					))}
				</div>
			)}
		</DashboardBox>
	);
};

export default Suggested;
