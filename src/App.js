import { Button, ConfigProvider } from 'antd';
import React from 'react';
import Footer from '@Components/Shared/Footer/Footer';
import './App.less';
import './Styles/main.scss';

const App = () => {
	return (
		<>
			<ConfigProvider direction='rtl'>
				<Footer />
			</ConfigProvider>
		</>
	);
};
export default App;
