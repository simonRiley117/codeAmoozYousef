import React from 'react';
import Modal from './Modal';
import SignInForm from './SignInForm';
import Button from '@Components/Shared/Buttons/Button';
import IconBtn from '@Components/Shared/Buttons/IconBtn';
import Link from '@Components/Shared/Buttons/Link';

// Assets
import loginPic from '@Assets/Pic/login.png';
import GoogleLogoPic from '@Assets/Pic/google_logo.png';
import { ReactComponent as ExitIcon } from '@Assets/Icons/Exit.svg';
import { ReactComponent as LinkedInIcon } from '@Assets/Icons/linkedin.svg';
import { ReactComponent as GithubIcon } from '@Assets/Icons/github.svg';

const SignIn = ({ onCancel, ...rest }) => {
	return (
		<Modal {...rest} onCancel={onCancel}>
			<div className='register__layout'>
				<div className='register__form'>
					<IconBtn title='بستن' icon={<ExitIcon />} onClick={onCancel} />

					<div className='register__form--wrapper'>
						<h2>ورود</h2>
						<SignInForm />
						<Button type='text'>رمز عبور رو فراموش کردم</Button>
						<div className='register__form--actions'>
							<Link
							id='google'
								type='primary'
								icon={<img src={GoogleLogoPic} alt='google' />}
							>
								ورود با اکانت گوگل
							</Link>
							<Link type='primary' icon={<LinkedInIcon />}>
								ورود با اکانت لینکدین
							</Link>
							<Link type='primary' icon={<GithubIcon />}>
								ورود با اکانت گیتهاب
							</Link>
						</div>
					</div>
				</div>
				<div className='register__content'>
					<h2>وقتشه که پیشرفت رو شروع کنی...</h2>
					<img src={loginPic} alt='ورود' />
					<Button type='primary'>ثبت نام</Button>
				</div>
			</div>
		</Modal>
	);
};
export default SignIn;
