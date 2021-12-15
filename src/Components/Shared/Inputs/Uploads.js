import React, { useState, forwardRef } from 'react';
import { ReactComponent as PdfIcon } from '@Assets/Icons/tutorialpdf.svg';

const Uploads = forwardRef((props, ref) => {
	const { value, message, register, label, id, ...rest } = props;

	return (
		<div className='input__upload'>
			<label className='input__label flex'>{label} :</label>
			<div className='input__upload--wrapper'>
            <label htmlFor={id} className='label__button--primary'>
                    انتخاب فایل
                </label>
				<input
					type='file'
					ref={ref}
					className='upload__input'
					{...rest}
					id={id}
				/>
			</div>
		</div>
	);
});

export default Uploads;
