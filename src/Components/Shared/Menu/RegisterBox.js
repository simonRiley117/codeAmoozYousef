import React from 'react';

import profile from '@Assets/Pic/profile.png';
import Link from '../Buttons/Link';
//  is delete
const isLogin = false;

const RegisterBox = () => {
	return (
		<>
			{isLogin ? (
				<div className='d-flex-align '>
					<p className='profile__name'>alireza_mzf</p>
					<div className='profile__image'>
						<img src={profile} alt='profile' />
					</div>
				</div>
			) : (
				<Link to='/' type='primary'>
					ورود / ثبت نام
				</Link>
			)}
		</>
	);
};
export default RegisterBox;
