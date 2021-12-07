import React, { useState } from 'react';
import { ReactComponent as HomeIcon } from '@Assets/Icons/home.svg';
import { ReactComponent as UserIcon } from '@Assets/Icons/user.svg';
import { ReactComponent as ResumeIcon } from '@Assets/Icons/resume.svg';
import { ReactComponent as CourseIcon } from '@Assets/Icons/course.svg';
import { ReactComponent as WalletIcon } from '@Assets/Icons/wallet.svg';
import { ReactComponent as MessageIcon } from '@Assets/Icons/message.svg';
import { ReactComponent as SettingIcon } from '@Assets/Icons/setting.svg';
import { ReactComponent as CloseIcon } from '@Assets/Icons/close.svg';
import { ReactComponent as ExiteIcon } from '@Assets/Icons/quite.svg';
import SidebarMenuItem from './SidebarMenuItem';
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

const SidebarMenu = () => {
	const [expand, setExpand] = useState(false);

	const closeNav = () => {
		setExpand((prev) => !prev);
	};

	return (
		<div
			className='sidebarMenu'
			style={!expand ? { width: '176px' } : { width: '68px' }}
		>
			<ul className='sidebarMenu__ul list'>
				{sidebarmenuItem.map((item) => (
					<SidebarMenuItem {...item} />
				))}
				<li
					className='sidebarMenu__li d-flex-align close'
					onClick={closeNav}
				>
					<div className='menuIcon'>
						<CloseIcon />
					</div>
					<p>بستن</p>
				</li>
				<li className='sidebarMenu__li d-flex-align exit'>
					<div className='menuIcon'>
						<ExiteIcon />
					</div>
					<p>خروج</p>
				</li>
			</ul>
		</div>
	);
};

export default SidebarMenu;
