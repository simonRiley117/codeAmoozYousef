import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';

import IconBtn from '@Components/Shared/Buttons/IconBtn';
import RegisterBox from './RegisterBox';
import classNames from 'classnames';
import UseScrollAppbar from './UseScrollAppbar';

// Assets
import logo from '@Assets/Logo/logo.svg';
import { ReactComponent as ShoppingCartIcon } from '@Assets/Icons/shopping-cart.svg';
import { ReactComponent as LogoTextIcon } from '@Assets/Logo/codeamooz-text.svg';

const menuItem = [
	{
		url: '/',
		text: 'صفحه ی اصلی',
		id: 1,
	},
	{
		url: '/courses',
		text: ' دوره ها ',
		id: 2,
	},
	{
		url: '/about-me',
		text: 'درباره ی ما ',
		id: 3,
	},
	{
		url: 'contact-us',
		text: 'ارتباط با ما',
		id: 4,
	},
	{
		url: 'faq',
		text: ' سوالات متدوال',
		id: 5,
	},
	{
		url: '/coWorkers',
		text: 'همکاری و اساتید',
		id: 6,
	},
];
const Appbar = () => {
	const { pathname } = useLocation();
	const dark = pathname === '/';
	const { visible, sticky } = UseScrollAppbar();

	return (
		<div
			className={classNames('Menu__sec', {
				visible: visible,
				sticky: sticky,
			})}
		>
			<div className='container'>
				<div className='Menu-wrapper'>
					<div
						className={classNames('menu_logo d-flex-align ', {
							dark: dark && !sticky,
						})}
					>
						<div className='logo'>
							<img src={logo} alt='logo' />
						</div>
						{/* <img src={Codeamoozlogo} alt='codeamooz' /> */}
						<div className='logo-text'>
							<LogoTextIcon />
						</div>
					</div>
					<nav className='Menu__nav d-flex-space'>
						<ul className='Menu__ul d-flex-space list'>
							{menuItem.map((item) => (
								<li key={item.id} className='Menu__li'>
									<NavLink exact to={item.url}>
										{item.text}
									</NavLink>
								</li>
							))}
						</ul>
						<div className='Menu_actions'>
							<IconBtn icon={<ShoppingCartIcon />} />
							<RegisterBox />
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Appbar;
