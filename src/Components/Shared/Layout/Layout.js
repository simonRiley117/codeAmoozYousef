import React from 'react';
import Footer from '../Footer/Footer';
import Appbar from '../Menu/Appbar';

const Layout = ({ children }) => {
	return (
		<>
			<Appbar />
			<main id='target' reference='target' className='main'>
				{children}
			</main>
			{/* <Footer /> */}
		</>
	);
};
export default Layout;
