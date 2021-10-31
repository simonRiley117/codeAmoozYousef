import React from 'react';
import { useForm } from 'react-hook-form';

import Input from '@Components/Shared/Inputs/Input';

import { ReactComponent as UserIcon } from '@Assets/Icons/user.svg';
import { ReactComponent as LockIcon } from '@Assets/Icons/lock.svg';
import { Checkbox } from 'antd';
import Button from '@Components/Shared/Buttons/Button';

const SignInForm = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='register__form--inner'>
				<Input
					label='نام کاربری'
					register={{
						required: true,
					}}
					message='نام کاربری را وارد کنید'
					name='userName'
					control={control}
					errors={errors}
					prefix={<UserIcon />}
				/>
				<Input
					label='رمز عبور'
					register={{
						required: true,
					}}
					message='رمز عبور را وارد کنید'
					name='password'
					control={control}
					errors={errors}
					prefix={<LockIcon />}
				/>
				<Checkbox>منو به خاطر بسپار</Checkbox>
				<Button htmlType='submit'>ورود</Button>
				
			</div>
		</form>
	);
};
export default SignInForm;
