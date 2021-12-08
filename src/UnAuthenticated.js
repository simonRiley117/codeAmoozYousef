import React from 'react';
import { Routes, Route } from 'react-router-dom';

import EmailVerify from './Components/Layouts/Register/EmailVerify';

const UnAuthenticated = () => {
	return (
		<Routes>
			<Route
				path='/account-confirm-email/:confirmedkey'
				element={<EmailVerify />}
			/>
		</Routes>
	);
};
export default UnAuthenticated;
