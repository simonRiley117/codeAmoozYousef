import PropTypes from 'prop-types';
import React from 'react';
import { Controller, useController } from 'react-hook-form';
import { Select as SelectBase } from 'antd';
import classNames from 'classnames';
import { ReactComponent as ArrowDown } from '@Assets/Icons/arrow-down.svg';

const Select = ({
	name,
	value,
	message,
	control,
	register,
	label,
	defaultValue,
	...rest
}) => {
	const {
		field,
		fieldState: { error },
	} = useController({
		name,
		control,
		rules: register,
		defaultValue: value || defaultValue,
	});
	return (
		<div className='input'>
			<label className='input__label' style={{display:'flex'}}>{label} :</label>

			<SelectBase
				className={classNames('input__select', {
					input__error: error,
				})}
				suffixIcon={<ArrowDown />}
				dropdownClassName='input__select--dropdown'
				size='large'
				getPopupContainer={(trigger) => trigger.parentNode}
				{...field}
				{...rest}
			/>
			{error && <span className='input__message'>{message}</span>}
		</div>
	);
};

Select.propTypes = {
	children: PropTypes.any,
	control: PropTypes.any,
	errors: PropTypes.any,
	message: PropTypes.any,
	name: PropTypes.any,
	optionList: PropTypes.array,
	register: PropTypes.any,
	value: PropTypes.any,
};
export default Select;
