import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// ----------------- Pages -----------------
import Home from '../Layouts/Home';

const Router = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />

			<Route path='*'>{() => <Redirect to='/' />}</Route>
		</Switch>
	);
};
export default Router;
