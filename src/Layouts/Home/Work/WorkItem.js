import PropTypes from 'prop-types';
import React from 'react';

const WorkItem = ({ icon, children }) => {
	return (
		<article className='home__work--item'>
			<div className='home__work--item-content'>
				<div className='home__work--item-icon'>{icon}</div>
				<p>{children}</p>
			</div>
		</article>
	);
};

WorkItem.propTypes = {
	children: PropTypes.node.isRequired,
	icon: PropTypes.node.isRequired,
};
export default WorkItem;
