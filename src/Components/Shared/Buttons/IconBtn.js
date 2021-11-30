import PropTypes from 'prop-types';
import { Button, Tooltip } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';

const IconBtn = ({ title,  success,classes, ...rest }) => {
	return (
		<Tooltip
			title={title}
			mouseEnterDelay={1}
			placement='top'
			getPopupContainer={(trigger) => trigger.parentNode}
		>
			<Button
				type='text'
				className={classNames(`button__icon `, [classes], {
					success: success,
				})}
				{...rest}
			/>
		</Tooltip>
	);
};

IconBtn.propTypes = {
	classes: PropTypes.string,
	title: PropTypes.string,
};
export default IconBtn;
