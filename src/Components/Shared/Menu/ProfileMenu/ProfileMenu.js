import { Menu } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@App/Context/authContext';
import { useUserData } from '@App/Context/userContext';

// icon
import { ReactComponent as ArrowLeftIcon } from '@Assets/Icons/arrow-left.svg';

import { ReactComponent as ExiteIcon } from '@Assets/Icons/quite.svg';
import { ReactComponent as UserIcon } from '@Assets/Icons/user.svg';
import { ReactComponent as Heart } from '@Assets/Icons/heart.svg';
import { ReactComponent as HomeIcon } from '@Assets/Icons/home.svg';
import { ReactComponent as CourseIcon } from "@Assets/Icons/course.svg";


// import { useUserInfo } from "@App/Context/UserInfoContext";

const ProfileMenu = ({ handleModalShow }) => {
	const { userData } = useUserData();
	let navigate = useNavigate();

	const handleSelectMenu = ({ key }) => {
		switch (key) {
			case 'dashboard':
				navigate('/dashboard');
				return;
			case 'favorites':
				navigate('/fav');
				return;
			case 'myCourse':
				navigate('/dashboard/my-course');
				return;
			case 'exit':
				handleModalShow();
				return;
			default:
				return;
		}
	};

	return (
		<Menu className='appbar__profile--menu' onClick={handleSelectMenu}>
			<Menu.Item className='information' key='info'>
				<div className='appbar__profile--info'>
					<UserIcon />
					<div className='appbar__profile--info-content'>
						<h4>{userData.first_name}</h4>
						<span>{userData.last_name}</span>
					</div>
				</div>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item icon={<ArrowLeftIcon />} key='dashboard'>
				<HomeIcon />
				<span>داشبورد</span>
			</Menu.Item>
			<Menu.Item icon={<ArrowLeftIcon />} key='myCourse'>
				<CourseIcon />
				<span>دوره های من</span>
			</Menu.Item>
			<Menu.Item icon={<ArrowLeftIcon />} key='favorites'>
				<Heart id='favorites' />
				<span>علاقه مندی‌ها</span>
			</Menu.Item>
			<Menu.Item icon={<ArrowLeftIcon />} danger key='exit'>
				<ExiteIcon />
				<span>خروج از حساب</span>
			</Menu.Item>
		</Menu>
	);
};
export default ProfileMenu;
