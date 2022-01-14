import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@Components/Shared/Inputs/Input';
import Password from '@Components/Shared/Inputs/Password';
import { toast } from 'react-toastify';
import { ReactComponent as UserIcon } from '@Assets/Icons/user.svg';
import { ReactComponent as LockIcon } from '@Assets/Icons/lock.svg';
import { Checkbox } from 'antd';
import Button from '@Components/Shared/Buttons/Button';
import { Link } from 'react-router-dom';
import useFetch from '../../../Context/useFetch';
import DotLoader from 'react-spinners/DotLoader';
import { css } from '@emotion/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const override = css`
	display: block;
	margin: 0 auto;
	border-color: #fff;
`;
/**
 * return register to site
 * @param   {integer} username  
 * @param   {integer} email
 * @param   {integer} password1  
 * @param   {integer} password2  
  
 *
 * @return  send email-confirm to user email
 * 
 * **/
const SignUpForm = ({ handleActive }) => {
	// validate input form
	const validationSchema = Yup.object().shape({
		username: Yup.string().required('نام کاربری را وارد کنید'),
		email: Yup.string()
			.required('ایمیل را وارد کنید')
			.email('ایمیل واردشده اشتباه است'),
		password: Yup.string()
			.required('رمز عبور را وارد کنید')
			.min(8, 'رمز عبور کوتاه است.حداقل هشت رقم وارد کنید')
			.test('match', 'پسورد شبیه نام کاربری است', (password, { parent }) => {
				return !password?.includes(parent.username);
			}),
		confirm_password: Yup.string()
			.required('رمز عبور را دوباره وارد کنید')
			.oneOf([Yup.ref('password'), null], 'رمز عبور تطابق ندارد'),
	});
	const formOptions = {mode:"onChange" , resolver: yupResolver(validationSchema) };
	const { handleSubmit ,formState:{isValid}, control, reset } = useForm(formOptions);

	const [postData, setPostData] = useState();
	const [checkBoxState, setCheckBoxState] = useState(false);
	const [loading, setLoading] = useState(false);

	const registerRequest = useFetch({
		url: `auth/register`,
		method: 'POST',
		data: postData,
		trigger: false,
		noHeader: true,
		argFunc: (res) => {
			setLoading(false);
			if (res.detail === 'Verification e-mail sent.') {
				handleActive();
				//go to login page
				reset({
					username: '',
					password: '',
					confirm_password: '',
					email: '',
				});
				toast.success('ایمیل تایید کاربری ارسال شد', {});
			}
		},
		argErrFunc: (mess) => {
			if ('password1' in mess)
				if (
					mess.password1.includes(
						'This password is too short. It must contain at least 8 characters.'
					)
				) {
					toast.error('پسورد کوتاه است.حداقل هشت رقم وارد کنید');
				} else if (
					mess.password1.includes('This password is too common.')
				) {
					toast.error('پسوورد ساده است');
				} else if (
					mess.password1.includes('This password is entirely numeric.')
				) {
					toast.error('پسوورد باید ترکیبی از حروف و اعداد باشد ');
				} else {
					toast.error(mess.password1);
				}
			else if ('username' in mess)
				if (
					mess.username.includes(
						'A user with that username already exists.'
					)
				) {
					toast.error('این نام کاربری وجود دارد');
				} else {
					toast.error(mess.username);
				}
			else if ('email' in mess)
				if (
					mess.email.includes(
						'A user is already registered with this e-mail address.'
					)
				) {
					toast.error('این ایمیل قبلا ثیت نام شده است');
				} else {
					toast.error(mess.email);
				}

			setLoading(false);
		},
		errMessage: '',
	});

	const onSubmit = (data) => {
		setPostData({
			username: data.username,
			password1: data.password,
			password2: data.confirm_password,
			email: data.email,
		});
		setLoading(true);
		registerRequest.reFetch();
	};

	function onChange(e) {
		//accept ruls func
		setCheckBoxState(e.target.checked);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='register__form--inner signUp'>
				<Input
					label='نام کاربری'
					// register={{
					// 	required: {
					// 		value: true,
					// 		message: 'نام کاربری را وارد کنید',
					// 	},
					// }}
					name='username'
					control={control}
					prefix={<UserIcon />}
				/>
				<Input
					label='ایمیل'
					// register={{
					// 	required: {
					// 		value: true,
					// 		message: 'ایمیل را وارد کنید',
					// 	},
					// }}
					type='email'
					name='email'
					control={control}
					prefix={<UserIcon />}
				/>
				<Password
					label='رمز عبور'
					// register={{
					// 	required: true,
					// }}
					// message='رمز عبور را وارد کنید'
					name='password'
					control={control}
					prefix={<LockIcon />}
				/>
				<Password
					label='تکرار رمز عبور'
					// register={{
					// 	required: true,
					// }}
					// message='رمز عبور را وارد کنید'
					name='confirm_password'
					control={control}
					prefix={<LockIcon />}
				/>
				<Checkbox checked={checkBoxState} onChange={onChange}>
					<Link to='/'>قوانین و مقررات</Link> سایت را قبول دارم
				</Checkbox>
				<Button disabled={registerRequest.loading || !checkBoxState || !isValid} htmlType='submit'>
					{loading ? (
						<DotLoader
							color='#fff'
							loading={loading}
							css={override}
							size={22}
						/>
					) : (
						'   ثبت نام'
					)}
				</Button>
			</div>
		</form>
	);
};
export default SignUpForm;
