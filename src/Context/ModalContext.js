import React, { useContext, useState, createContext } from 'react';

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
	const [isOpenModal, setOpenModal] = useState(false);
	const handleCloseModal = () => {
		setOpenModal((prev) => !prev);
	};

	return (
		<ModalContext.Provider value={{ isOpenModal, handleCloseModal }}>
			{children}
		</ModalContext.Provider>
	);
};

const useModal = () => useContext(ModalContext);

export { useModal, ModalProvider };
