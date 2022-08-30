import PropTypes from 'prop-types';
import React from 'react';

const ProcessItem = ({ title, Icon, children, ...rest }) => {
	return (
		<div className='home__process--item flex items-center gap-x-10' {...rest}>
			<span>
				<Icon />
			</span>
			<div className=''>
				<h4>{title}</h4>
				<p>{children}</p>
			</div>
		</div>
	);
};

ProcessItem.propTypes = {
	children: PropTypes.node,
	image: PropTypes.string,
	title: PropTypes.string,
};
export default ProcessItem;
