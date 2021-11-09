import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useAuth } from '@App/Context/authContext';

// ----------------- Pages -----------------

import Authenticated from '@App/Authenticated';
import UnAuthenticated from '@App/UnAuthenticated';

const Router = () => {
	const { token } = useAuth();
	return token ? <Authenticated /> : <UnAuthenticated />;
};
export default Router;