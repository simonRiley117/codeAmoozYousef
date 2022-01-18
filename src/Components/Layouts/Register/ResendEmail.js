import React, { useState } from 'react';
import IconBtn from '@Components/Shared/Buttons/IconBtn';

import { ReactComponent as ExitIcon } from '@Assets/Icons/Exit.svg';
import { ReactComponent as UserIcon } from '@Assets/Icons/user.svg';

import { useForm } from 'react-hook-form';
import Input from '@Components/Shared/Inputs/Input';
import Button from '@Components/Shared/Buttons/Button';
import classNames from 'classnames';
import useFetch from '../../../Context/useFetch';
import { useNavigate } from 'react-router-dom';

const ResendEmail = ({ onCancel, active, handleResendEmail }) => {
	const {
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm();

	const [postData, setPostData] = useState();
	const navigate = useNavigate();

	const resendEmail = useFetch({
		url: `auth/resend-email`,
		method: 'POST',
		data: postData,
		noHeader: true,
		trigger: false,
		message: 'ایمیل با موفقیت ارسال شد',
		argFunc: (res) => {
			reset();
			handleResendEmail();
		},
		errMessage: (mess) => {
			if (mess.detail == 'Not found.') {
				//! toast error message
				navigate('/');
			}
		},
	});

	const onSubmit = (data) => {
		setPostData({ email: data.email });
		resendEmail.reFetch();
	};

	return (
		<div
			className={classNames('register__form forgetPassword', {
				active: active,
			})}
		>
			<IconBtn title='بستن' icon={<ExitIcon />} onClick={onCancel} />
			<Button type='text' classes='back' onClick={handleResendEmail}>
				بازگشت
			</Button>
			<div className='register__form--wrapper'>
				<h2>ارسال دوباره ایمیل</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='register__form--inner'>
						<Input
							label='ایمیل'
							register={{
								required: {
									value: true,
									message: 'ایمیل را وارد کنید',
								},
							}}
							name='email'
							type='email'
							control={control}
							errors={errors}
							prefix={<UserIcon />}
						/>
						<Button disabled={resendEmail.loading} htmlType='submit'>
							ارسال ایمیل
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default ResendEmail;
