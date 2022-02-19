import React from 'react';
import teacher from '@Assets/Pic/teacherLogin.png';
import { TEAChER_URL } from '../../../constants';
import { useUserData } from '@App/Context/userContext';

const TeacherLogin = () => {
	const { userData } = useUserData();
	return (
		<div className='dashboard__login flex flex-col items-center justify-center gap-y-6'>
			<h2>ورود به بخش اساتید</h2>
			<img src={teacher} alt={teacher} className='image'/>
			<p>
				اگر توانایی تدریس داری و میخوای دانش خودت رو بقیه انتقال بدی به
				عنوان استاد ثبت نام کن و کارتو شروع کن
			</p>
			<a
				className='link link__primary mt-4'
				href={
					userData.user_is_teacher
						? TEAChER_URL + '/'
						: TEAChER_URL + '/profile'
				}
				target='_blank' rel="noreferrer"
			>
				ورود
			</a>
			{/*<a className="ant-btn ant-btn-primary button button__primary">*/}
			{/*    شروع همکاری*/}
			{/*</a>*/}
		</div>
	);
};

export default TeacherLogin;
