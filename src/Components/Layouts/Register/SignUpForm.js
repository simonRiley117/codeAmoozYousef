import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '@Components/Shared/Inputs/Input';
import Password from '@Components/Shared/Inputs/Password';

import { ReactComponent as UserIcon } from '@Assets/Icons/user.svg';
import { ReactComponent as LockIcon } from '@Assets/Icons/lock.svg';
import { Checkbox } from 'antd';
import Button from '@Components/Shared/Buttons/Button';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='register__form--inner signUp'>
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
					label='ایمیل'
					register={{
						required: true,
					}}
					message='ایمیل را وارد کنید'
					name='userName'
					control={control}
					errors={errors}
					prefix={<UserIcon />}
				/>
				<Password
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
				<Password
					label='تکرار رمز عبور'
					register={{
						required: true,
					}}
					message='رمز عبور را وارد کنید'
					name='password'
					control={control}
					errors={errors}
					prefix={<LockIcon />}
				/>
				<Checkbox>
					<Link>قوانین و مقررات</Link> سایت را قبول دارم
				</Checkbox>
				<Button htmlType='submit'>ثبت نام</Button>
			</div>
		</form>
	);
};
export default SignUpForm;
