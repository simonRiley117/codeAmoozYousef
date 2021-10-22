import PropTypes from 'prop-types';
import React from 'react';
import Link from '@Components/Shared/Buttons/Link';
import classNames from 'classnames';

const NewsItem = ({ image, title, description, isActive, isPrev, isNext }) => {
	return (
		<article
			className={classNames('home__news--item', {
				active: isActive,
				next: isNext,
				prev: isPrev,
			})}
		>
			<div className='home__news--item-image'>
				<img src={image} alt='' />
			</div>
			<div className='home__news--item-info'>
				<h2>{title}</h2>
				<p>{description}</p>
				<Link to='/'>بیشتر بخوانید</Link>
			</div>
		</article>
	);
};

NewsItem.propTypes = {
	description: PropTypes.string,
	image: PropTypes.string,
	title: PropTypes.string,
};
export default NewsItem;
