import React from 'react';
import { Input as InputBase } from 'antd';
import { useController } from 'react-hook-form';
import classNames from 'classnames';

const Textarea = ({
	name,
	value,
	control,
	register,
	id,
	minRows,
	label,
	...rest
}) => {
	const {
		field,
		fieldState: { error },
	} = useController({
		name,
		control,
		rules: register,
		defaultValue: value,
	});
	return (
		<div className='input Textarea' id={id}>
			<label className='input__label'>{label} :</label>

			<InputBase.TextArea
				className={classNames('input__field', {
					input__error: error,
				})}
				autoSize={{ minRows: minRows || 4, maxRows: 5 }}
				{...field}
				{...rest}
				
			/>
			{error && <span className='input__message'>{error.message}</span>}
		</div>
	);
};
export default Textarea;
