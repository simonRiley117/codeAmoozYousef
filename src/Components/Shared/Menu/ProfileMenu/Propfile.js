import { Avatar, Badge, Dropdown } from 'antd';
import React, { useState } from 'react';
// import { FaChevronDown } from "react-icons/fa";
import ProfileMenu from './ProfileMenu';
import Modal from '@Components/Shared/Modal/Modal';
import Button from '../../Buttons/Button';
import { useAuth } from '@App/Context/authContext';
import { useNavigate } from 'react-router-dom';

// image
import { ReactComponent as ArrowDownIcon } from '@Assets/Icons/arrow-down.svg';
import { useUserData } from '@App/Context/userContext';

const Propfile = () => {
	const { userData } = useUserData();
	const [modal, setModal] = useState(false);

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
