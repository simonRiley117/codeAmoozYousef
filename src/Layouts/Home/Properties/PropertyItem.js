import PropTypes from 'prop-types';
import React from 'react';

const PropertyItem = ({ icon, children }) => {
	return (
		<article className='home__property--item'>
			<div className='home__property--item-content'>
				<div className='home__property--item-icon'>{icon}</div>
				<div className='home__property--item-details'>
					<p>{children}</p>
				</div>
			</div>
		</article>
	);
};

PropertyItem.propTypes = {
	children: PropTypes.node.isRequired,
	icon: PropTypes.node.isRequired,
};
export default PropertyItem;
