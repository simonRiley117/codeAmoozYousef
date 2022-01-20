import classNames from 'classnames';
import React from 'react';

const DashboardBox = ({ title, classes, children }) => {
	return (
		<div className={classNames(' dashboard__box px-10 py-6', [classes])}>
			<h2 className='dashboard__box--title'>{title}</h2>
			{children}
		</div>
	);
};
export default DashboardBox;
