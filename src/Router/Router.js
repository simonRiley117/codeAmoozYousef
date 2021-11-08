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

// <<<<<< HEAD
//   return (
//     <Switch>
//       <Layout>
//         <Route exact path="/" component={Home} />
//         <Route path="/coWorkers">
//           <CoWorkersRouter />
//         </Route>
//         <Route exact path="/news" component={News} />
//         <Route exact path="/news/news-info" component={NewsDetails} />
//         <Route exact path="/faq" component={Faq} />
//         <Route exact path="/contact-us" component={Contact} />
//         <Route exact path="/about-me" component={AboutUs} />
//         <Route exact path="/courses" component={Courses} />
//         <Route
//           exact
//           path="/course"
//           render={(routeProps) => (
//             <Course key={routeProps.history.location.state.id} />
//           )}
//         />
//         <Route exact path="/example" component={Example} />
//       </Layout>
//       <Route path="*">{() => <Redirect to="/" />}</Route>
//     </Switch>
//   );
// =======
