import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Appbar from '../Menu/Appbar';

const Layout = ({ children }) => {
	return (
		<>
			<Appbar />
			<main id='target' reference='target' className='main'>
				<Outlet />
			</main>
			{/* <Footer /> */}
		</>
	);
};
export default Layout;
