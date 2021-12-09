import React, { useState, forwardRef } from 'react';

import { ReactComponent as PdfIcon } from '@Assets/Icons/tutorialpdf.svg';
import { useController } from 'react-hook-form';

const Upload = ({
	name,
	control,
	value,
	message,
	register,
	label,
	id,
	...rest
}) => {
	const [uploadValue, setuploadValue] = useState(value);
	const [fileName, setFileName] = useState(value?.split('/').pop());
	const handleChange = ({ target }) => {
		setuploadValue(target.files[0]);
		setFileName(target.files[0].name);
	};

	const {
		field,
		fieldState: { error },
	} = useController({
		name,
		control,
		rules: register,
		defaultValue: value,
	});
	console.log('error', error);

	return (
		<div className='Upload '>
			<label className='input__label' style={{ display: 'flex' }}>
				{label} :
			</label>
			<div className='d-flex-align mt-4 '>
				<label htmlFor={id} className='label__button--primary'>
					انتخاب فایل
				</label>

				<input
					type='file'
					onInput={handleChange}
					onFocus={(e) => (e.target.placeholder = '')}
					className='upload__input'
					{...field}
					{...rest}
					id={id}
				/>
				{fileName && (
					<div className='upload__preview'>
						{/*<IconBtn title='حذف' danger icon={<TrashIcon/>}/>*/}
						<p>{fileName}</p>
						<div className='upload__preview--icon'>
							<PdfIcon />
						</div>
					</div>
				)}
			</div>
			{error && <span className='input__message'>{error.message}</span>}
		</div>
	);
};

export default Upload;
