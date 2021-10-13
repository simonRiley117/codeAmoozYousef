import { Button, ConfigProvider } from 'antd';
import React from 'react';
import './App.less';
import './Styles/main.scss';

const App = () => {
	return (
		<>
			<ConfigProvider direction='rtl'>
				<Button>ddd</Button>

				<button class='py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700'>
					Click me
				</button>
			</ConfigProvider>
		</>
	);
};
export default App;
