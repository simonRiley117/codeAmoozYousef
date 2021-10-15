import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Layout from '@Components/Shared/Layout/Layout';
// ----------------- Pages -----------------
import Home from '../Layouts/Home';
import News from "@Components/Shared/News";
import SingleTitle from "@Components/Shared/News/SingleTitle";

const Router = () => {
	return (
		<Switch>
			<Layout>
				<Route exact path='/' component={Home} />
				<Route exact path='/news' component={News} />
				<Route exact path='/news/:id' render={routeProps => <SingleTitle {...routeProps} />} />
			</Layout>

			<Route path='*'>{() => <Redirect to='/' />}</Route>
		</Switch>
	);
};
export default Router;
