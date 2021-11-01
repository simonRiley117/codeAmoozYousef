import React from 'react';
import IconBtn from '@Components/Shared/Buttons/IconBtn';

import { ReactComponent as ExitIcon } from '@Assets/Icons/Exit.svg';
import { ReactComponent as UserIcon } from '@Assets/Icons/user.svg';

import { useForm } from 'react-hook-form';
import Input from '@Components/Shared/Inputs/Input';
import Button from '@Components/Shared/Buttons/Button';
import classNames from 'classnames';

const ForgetPassword = ({ onCancel, active, handleForgetPassword }) => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {};

	return (
		<div
			className={classNames('register__form forgetPassword', {
				active: active,
			})}
		>
			<IconBtn title='بستن' icon={<ExitIcon />} onClick={onCancel} />
			<Button type='text' classes='back' onClick={handleForgetPassword}>
				بازگشت
			</Button>
			<div className='register__form--wrapper'>
				<h2>فراموشی رمز عبور</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='register__form--inner'>
						<Input
							label='ایمیل خود را جهت تعویض رمز عبور موارد کنید.'
							register={{
								required: true,
							}}
							message='ایمیل را وارد کنید'
							name='userName'
							control={control}
							errors={errors}
							prefix={<UserIcon />}
						/>
						<Button htmlType='submit'>ارسال ایمیل</Button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default ForgetPassword;
