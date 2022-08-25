import React, { useState } from 'react';
import classNames from 'classnames';
import { NavLink, useNavigate } from 'react-router-dom';
import { Badge } from 'antd';

// Components
import Register from '@Components/Layouts/Register/Register';
import IconBtn from '../Buttons/IconBtn';
import Button from '../Buttons/Button';

// Hooks
import UseScrollAppbar from './UseScrollAppbar';

// Assets
import logo from '@Assets/Logo/logo.svg';
import { ReactComponent as ShoppingCartIcon } from '@Assets/Icons/Buy.svg';
import useMediaQuery from '@App/Hooks/useMediaQuery';

// constants
const menuList = [
	{
		url: '/courses',
		title: ' دوره ها ',
	},
	{
		url: '/coWorkers',
		title: 'همکاران و اساتید',
	},
	{
		url: '/faq',
		title: 'پرسش و پاسخ',
	},
	{
		url: '/contact-us',
		title: 'ارتباط با ما',
	},
];

const Appbar = () => {
	const [isModalVisible, setModalVisible] = useState(false);
	const [isOpenMenu, setOpenMenu] = useState(false);

	// const { sticky } = UseScrollAppbar();
	const navigate = useNavigate();
	const isTablet = useMediaQuery('(max-width: 768px)');

	const handleModalVisible = () => {
		setModalVisible((prev) => !prev);
	};

	const handleToggleMenu = () => {
		if (isTablet) {
			setOpenMenu((prev) => !prev);
			isOpenMenu
				? document.body.classList.remove('scrolling-effect')
				: document.body.classList.add('scrolling-effect');
		}
	};

	return (
		<>
			<div className='appbar'>
				<div className='container flex appbar__container'>
					<NavLink to='/' className='z-10'>
						<div className='appbar__logo d-flex gap-x-7'>
							<div className='appbar__logo--img '>
								<img src={logo} alt='CodeAmooz' />
							</div>
							<h2 className='appbar__logo--title'>CODEAMOOZ</h2>
						</div>
					</NavLink>
					<div
						className={classNames('appbar__layout d-flex flex-grow', {
							'open-menu': isOpenMenu,
						})}
					>
						<nav className='appbar__menu flex'>
							{menuList.map(({ url, title }) => (
								<NavLink
									key={url}
									to={url}
									className='appbar__menu--link'
									onClick={() => handleToggleMenu()}
								>
									<span>{title}</span>
								</NavLink>
							))}
						</nav>
						<div className='appbar__action d-flex gap-x-7'>
							<div className=''>
								<IconBtn
									title='سبد خرید'
									classes='appbar__action--cart'
									icon={
										<Badge
											size='small'
											// count={cartData?.cart_nums}
											className='appbar__action--badge'
										>
											<ShoppingCartIcon />
										</Badge>
									}
									onClick={() => navigate('/shopping-card')}
								/>
							</div>
							<div className='appbar__action--login'>
								<Button type='primary' onClick={handleModalVisible}>
									ورود / ثبت نام
								</Button>
							</div>
						</div>
					</div>
					<IconBtn
						classes={classNames('appbar__menu--btn', {
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
				</div>
			</div>
			<Register visible={isModalVisible} onCancel={handleModalVisible} />
		</>
	);
};
export default Appbar;
