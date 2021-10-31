import React from 'react';
import { Modal as ModalBase } from 'antd';

const Modal = ({ children, ...rest }) => {
	return (
		<ModalBase
			footer={null}
			closable={false}
			centered
			className='register__modal'
            zIndex={1100}
			{...rest}
		>
			{children}
		</ModalBase>
	);
};
export default Modal;
