import PropTypes from 'prop-types';
import React from 'react';
import { Input as InputBase } from 'antd';
import { Controller } from 'react-hook-form';
import classNames from 'classnames';

const Password = ({
	name,
	value,
	message,
	control,
	register,
	errors,
	classes,
	label,
	...rest
}) => {
	const error = errors[name];
	return (
		<div className='input text-right '>
			<label className='input__label'>{label}</label>
			<Controller
				name={name}
				control={control}
				rules={register}
				defaultValue={value}
				render={({ field }) => (
					<InputBase.Password
						className={classNames('input__field', [classes], {
							input__error: error,
						})}
						{...field}
						{...rest}
					/>
				)}
			/>
			{error && <span className='input__message'>{message}</span>}
		</div>
	);
};

Password.propTypes = {
	classes: PropTypes.any,
	control: PropTypes.any,
	errors: PropTypes.any,
	label: PropTypes.string,
	message: PropTypes.string,
	name: PropTypes.string,
	register: PropTypes.any,
	value: PropTypes.any,
};
export default Password;
