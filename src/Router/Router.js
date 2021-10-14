import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Layout from '@Components/Shared/Layout/Layout';
// ----------------- Pages -----------------
import Home from '../Layouts/Home';

const Router = () => {
	return (
		<Switch>
			<Layout>
				<Route exact path='/' component={Home} />
			</Layout>

			<Route path='*'>{() => <Redirect to='/' />}</Route>
		</Switch>
	);
};
export default Router;
