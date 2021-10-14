import { Button, ConfigProvider } from 'antd';
import React from 'react';
import Router from './Router/Router';
import './App.less';
import './Styles/main.scss';

const App = () => {
	return (
		<>
			<ConfigProvider direction='rtl'>
				<Router />
			</ConfigProvider>
		</>
	);
};
export default App;
