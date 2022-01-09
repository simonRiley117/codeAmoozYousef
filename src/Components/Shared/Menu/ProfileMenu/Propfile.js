import { Avatar, Badge, Dropdown } from 'antd';
import React, { useState } from 'react';
// import { FaChevronDown } from "react-icons/fa";
import ProfileMenu from './ProfileMenu';
import Modal from '@Components/Shared/Modal/Modal';
import Button from '../../Buttons/Button';
import { useAuth } from '@App/Context/authContext';
import useMediaQuery from '@App/Hooks/useMediaQuery';
import { Link, useNavigate } from 'react-router-dom';

// image
import { ReactComponent as ArrowDownIcon } from '@Assets/Icons/arrow-down.svg';
import { useUserData } from '@App/Context/userContext';

const Propfile = () => {
	const { userData } = useUserData();
	const [modal, setModal] = useState(false);

	const isTablet = useMediaQuery('(max-width: 992px)');

	let navigate = useNavigate();
	const { authDispatch } = useAuth();

	const handleModalShow = () => {
		setModal((prev) => !prev);
	};

	const logout = () => {
		authDispatch({ type: 'LOGOUT' });
		navigate('/', { replace: true });
	};
	const Icon = (
		<span>
			<ArrowDownIcon />
		</span>
	);
	return (
		<>
			{isTablet ? (
				<div className='appbar__profile--area'>
					<div className='flex gap-x-4 '>
						<div className='appbar__profile'>
							<Avatar src={userData.cover} alt='name' shape='square'>
								{userData.name}
							</Avatar>
						</div>
						<div className='flex flex-col'>
							<h4>{userData.first_name}</h4>
							<span>{userData.last_name}</span>
						</div>
					</div>
					<div className='appbar__profile--area-menu flex flex-col mt-10 gap-y-8'>
						<Link to='/dashboard'>داشبورد</Link>
						<Link to='/fav'>علاقه مندی‌ها</Link>
						<span onClick={handleModalShow}>خروج از حساب</span>
					</div>
				</div>
			) : (
				<Dropdown
					arrow
					overlay={<ProfileMenu handleModalShow={handleModalShow} />}
					getPopupContainer={(triggerNode) => triggerNode.parentNode}
					destroyPopupOnHide
				>
					<div className='appbar__profile'>
						<Badge count={Icon}>
							<Avatar src={userData.cover} alt='name' shape='square'>
								name
							</Avatar>
						</Badge>
					</div>
				</Dropdown>
			)}
			<Modal
				className='ExitModal'
				visible={modal}
				onCancel={handleModalShow}
			>
				<div className='ExitModal__back'>
					<p className='mb-12'>آیا از خروج مطمئن هستید؟</p>
					<div className='d-flex-space'>
						<Button onClick={logout}>بله</Button>
						<Button onClick={handleModalShow} type='primary'>
							خیر
						</Button>
					</div>
				</div>
			</Modal>
		</>
	);
};
export default Propfile;
