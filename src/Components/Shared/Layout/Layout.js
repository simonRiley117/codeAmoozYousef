import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Appbar from '../Menu/Appbar';
import { CartDataProvider } from '../../../Context/cartContext';

const Layout = ({ children }) => {
	return (
		<>
			{/*<CartDataProvider>*/}
			{/* <Appbar /> */}

			<main id='target' reference='target' className='main'>
				<Outlet />
			</main>
			{/*</CartDataProvider>*/}

			<Footer />
		</>
	);
};
export default Layout;
