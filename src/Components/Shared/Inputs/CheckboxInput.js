import PropTypes from 'prop-types';
import React from 'react';
import { Checkbox } from 'antd';
import { Controller, useController } from 'react-hook-form';
import classNames from 'classnames';

const CheckboxInput = ({
	name,
	message,
	control,
	register,
	classes,
	label,
	onSelected,
	large,
	...rest
}) => {
	const {
		field: { onChange, value },
		fieldState: { error },
	} = useController({
		name,
		control,
		rules: register,
		defaultValue: false,
	});
	return (
		<div className='input'>
			<Checkbox
				className={classNames('input__check', [classes], {
					input__error: error,
					checkbox__large: large,
				})}
				// {...field}
				onChange={(e) => {
					!!onSelected && onSelected(e.target.checked);
					onChange(e);
				}}
				checked={value || false}
				{...rest}
			>
				{label}
			</Checkbox>
			{error && <span className='input__message'>{message}</span>}
		</div>
	);
};

CheckboxInput.defaultProps = {
	value: false,
};

CheckboxInput.propTypes = {
	classes: PropTypes.any,
	control: PropTypes.any,
	errors: PropTypes.any,
	label: PropTypes.string,
	message: PropTypes.string,
	name: PropTypes.string,
	register: PropTypes.any,
	value: PropTypes.bool,
};
export default CheckboxInput;
