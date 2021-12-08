import React, { useState } from 'react';

import logo from '@Assets/Logo/logo.svg';
import { ReactComponent as ShoppingCartIcon } from '@Assets/Icons/shopping-cart.svg';
import { ReactComponent as LogoTextIcon } from '@Assets/Logo/codeamooz-text.svg';
import profile from '@Assets/Pic/profile.png';
import IconBtn from '../Buttons/IconBtn';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import UseScrollAppbar from './UseScrollAppbar';
import { useUserData } from '@App/Context/userContext';


import { ReactComponent as HomeIcon } from '@Assets/Icons/home.svg';
import { ReactComponent as UserIcon } from '@Assets/Icons/user.svg';
import { ReactComponent as ResumeIcon } from '@Assets/Icons/resume.svg';
import { ReactComponent as CourseIcon } from '@Assets/Icons/course.svg';
import { ReactComponent as WalletIcon } from '@Assets/Icons/wallet.svg';
import { ReactComponent as MessageIcon } from '@Assets/Icons/message.svg';
import { ReactComponent as SettingIcon } from '@Assets/Icons/setting.svg';
import SidebarMenuItem from './SidebarMenuItem';

const menuItem = [
	{
		url: '',
		text: 'صفحه ی اصلی',
		id: 1,
	},

	{
		url: '',
		text: 'ارتباط با ما',
		id: 4,
	},
	{
		url: '',
		text: ' سوالات متدوال',
		id: 5,
	},
	{
		url: '',
		text: 'همکاری و اساتید',
		id: 6,
	},
];
const sidebarmenuItem = [
	{
		text: 'پیشخوان',
		icon: <HomeIcon />,
		url: '/',
	},
	{
		text: 'پروفایل',
		icon: <UserIcon />,
		url: '/profile',
	},
	{
		text: 'رزومه',
		icon: <ResumeIcon />,
		url: '/resume',
	},
	{
		text: 'دوره های من',
		icon: <CourseIcon />,
		url: '/my-course',
	},
	{
		text: 'کیف پول',
		icon: <WalletIcon />,
		url: '/wallet',
	},
	{
		text: 'پیام ها',
		icon: <MessageIcon />,
		url: '/messages',
	},
	{
		text: 'تنظیمات',
		icon: <SettingIcon />,
		url: '/setting',
	},
];

const DahsboardAppbar = () => {
	const [isOpenMenu, setOpenMenu] = useState(false);
	const { sticky } = UseScrollAppbar();

	const { userData } = useUserData();


	const handleToggleMenu = () => {
		setOpenMenu((prev) => !prev);

		const html = document.querySelector('html');
		!isOpenMenu
			? (html.style.overflowY = 'hidden')
			: (html.style.overflowY = 'auto');
	};

	const renderSideBarItem = () => {
		return sidebarmenuItem.map((item) => <SidebarMenuItem {...item} />);
	};

	return (
		<div
			className={classNames('Menu__sec', {
				sticky: sticky,
			})}
		>
			<div className='d-flex-space'>
				<div className='menu_logo d-flex-align '>
					<div className='logo'>
						<img src={logo} alt='logo' />
					</div>
					{/* <img src={Codeamoozlogo} alt='codeamooz' /> */}
					<div className='logo-text'>
						<LogoTextIcon />
					</div>
				</div>
				<div className='Menu__nav--wrapper'>
					<IconBtn
						classes={classNames('Menu__nav--btn', {
							open: isOpenMenu,
						})}
						icon={
							<>
								<span></span>
								<span></span>
								<span></span>
							</>
						}
						onClick={handleToggleMenu}
					/>
					<nav className='Menu__nav d-flex-space'>
						<ul className='Menu__ul d-flex-space list'>
							{isOpenMenu && renderSideBarItem()}
						</ul>
						<ul className='Menu__ul d-flex-space list'>
							{menuItem.map((item) => (
								<li key={item.id} className='Menu__li'>
									<NavLink to={item.url}>
										{item.text}
									</NavLink>
								</li>
							))}
						</ul>
						{/* <img src={CardIcon} alt='card' /> */}
						<div className='d-flex-align Menu_actions--profile'>
							<p className='profile__name'>{userData.username}</p>
							<div className='profile__image'>
								<img src={userData.cover} alt='profile' />
							</div>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default DahsboardAppbar;
