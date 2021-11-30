import PropTypes from 'prop-types';
import React from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import { Controller, useController } from 'react-hook-form';
import classNames from 'classnames';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const DatePickerInput = ({
	label,
	control,
	placeholder,
	rules,
	name,
	message,
	defaultValue,
	...rest
}) => {
	const {
		field: { onChange, value },
		fieldState: { error },
	} = useController({
		name,
		control,
		rules,
		defaultValue: new DateObject(defaultValue).convert(),
	});
	return (
		<div className='input '>
			<label className='input__label'>{label} :</label>
			<DatePicker
				calendar='persian'
				digits={digits}
				calendar={persian}
				locale={persian_fa}
				calendarPosition='top-right'
				fixMainPosition
				inputClass={classNames('input__field date__picker', {
					input__error: error,
				})}
				containerClassName='date__picker--wrapper'
				placeholder={placeholder}
				format='DD MMMM YYYY'
				// onChange={onChange}
				onChange={(date) => onChange(date?.isValid ? date : '')}
				value={value || new DateObject().convert()}
				{...rest}
			/>

			{error && <span className='input__message'>{message}</span>}
		</div>
	);
};

DatePickerInput.propTypes = {
	control: PropTypes.any,
	label: PropTypes.string,
	name: PropTypes.string,
	placeholder: PropTypes.string,
};

export default DatePickerInput;

{
	/* <Controller
				name={name}
				control={control}
				render={({ field }) => (
					<DatePicker
						animation
						calendar='persian'
						calendar={persian}
						locale={persian_fa}
						calendarPosition='auto-right'
						inputClass={classNames('input__field date__picker', {
							input__error: error,
						})}
						containerClassName='date__picker--wrapper'
						placeholder={placeholder}
						format='YYYY-MM-DD'
						// onChange={onChange}
						{...rest}
					/>
				)}
			/> */
}
