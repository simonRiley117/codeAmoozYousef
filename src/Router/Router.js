import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '@App/Context/authContext';

import Authenticated from '@App/Authenticated';
import UnAuthenticated from '@App/UnAuthenticated';

// ----------------- Pages -----------------
import Home from '@Layouts/Home';

import CoWorkers from '@Layouts/CoWorkers';
import Master from '@Layouts/CoWorkers/Master/Master';
import TechnicalTeam from '@Layouts/CoWorkers/TechnicalTeam';
import Employer from '@Layouts/CoWorkers/Employer/Employer';
import TechnicalTeams from '@Components/Layouts/CoWorkers/TechnicalTeam/TechnicalTeams';
import Layout from '@Components/Shared/Layout/Layout';

const Router = () => {
	const { token } = useAuth();
	// return token ? <Authenticated /> : <UnAuthenticated />;
	return (
		<Layout>
			<Routes>
				<Route index path='/' element={<Home />} />
				<Route path='/coWorkers' element={<CoWorkers />} />
				<Route path='coWorkers/master' element={<Master />} />
				<Route path='coWorkers/technicalteam' element={<TechnicalTeam />} />
				<Route
					path='coWorkers/technicalteam/information'
					element={<TechnicalTeams />}
				/>
				<Route index path='coWorkers/employer' element={<Employer />} />
			</Routes>
		</Layout>
	);
};
export default Router;
