import PropTypes from 'prop-types';
import React from 'react';

import Link from '@Components/Shared/Buttons/Link';
import classNames from 'classnames';

const LinkBox = ({ dark }) => {
	return (
		<div
			className={classNames(
				'flex items-center home__header--action gap-x-10 ',
				{
					dark: dark,
				}
			)}
		>
			<Link to='/courses' type='primary'>
				همه دوره ها
			</Link>
			<Link to='/'>همکاران و اساتید</Link>
		</div>
	);
};

LinkBox.propTypes = {
	dark: PropTypes.bool,
};
export default LinkBox;
