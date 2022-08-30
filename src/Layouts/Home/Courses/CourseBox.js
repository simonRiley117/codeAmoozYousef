import PropTypes from 'prop-types';
import React from 'react';

const CourseBox = ({ title, icon, subtitle }) => {
	return (
		<div className='home__courses--item flex items-center flex-col '>
			<img src={icon} alt={title} />
			<h4>{title}</h4>
			<span>{subtitle}</span>
		</div>
	);
};

CourseBox.propTypes = {
	Icon: PropTypes.string,
	subtitle: PropTypes.string,
	title: PropTypes.string,
};
export default CourseBox;
