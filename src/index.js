import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { AuthProvider } from './Context/authContext';
import { ToastContainer } from 'react-toastify';
import { UserDataProvider } from './Context/userContext';

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<UserDataProvider>
				<BrowserRouter>
					<RecoilRoot>
						<ToastContainer
							position='top-center'
							autoClose={4000}
							newestOnTop
							closeOnClick
							rtl
							pauseOnFocusLoss
							draggable
							pauseOnHover
						/>
						<App />
					</RecoilRoot>
				</BrowserRouter>
			</UserDataProvider>
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
