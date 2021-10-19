import React from 'react';

const OffersItem = ({ image, children }) => {
	return (
		<article className='home__offers--item'>
			<div className='home__offers--item-content'>
				<div className='home__offers--item-image'>
					<img src={image} alt='student' />
				</div>
				<div className='home__offers--item-info'>{children}</div>
			</div>
		</article>
	);
};
export default OffersItem;
