import React from 'react';
import classNames from 'classnames';
import { Link as LinkBase } from 'react-router-dom';
import PropTypes from 'prop-types';

const Link = ({
	type,
	classes,
	large,
	success,
	disabled,
	children,
	icon,
	...rest
}) => {
	return (
		<LinkBase
			className={classNames(`link link__${type}`, [classes], {
				large: large,
				success: success,
				disabled: disabled,

			})}
			{...rest}
		>
			{!!icon && icon}
			<span>{children}</span>
		</LinkBase>
	);
};
export default Link;

Link.defaultProps = {
	type: 'default',
	large: false,
	success: false,
	disabled: false,
};

Link.propTypes = {
	children: PropTypes.node.isRequired,
	classes: PropTypes.string,
	large: PropTypes.bool,
	success: PropTypes.bool,
	disabled: PropTypes.bool,
	type: PropTypes.oneOfType(
		[PropTypes.oneOf(['primary', 'default', 'text', 'gradient'])],
		PropTypes.string.isRequired
	),
};
