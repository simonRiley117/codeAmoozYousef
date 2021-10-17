import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Layout from "@Components/Shared/Layout/Layout";
// ----------------- Pages -----------------
// import News from "@Layouts/News";
import SingleTitle from "@Layouts/News/SingleTitle";
import Home from "../Layouts/Home";
import CoWorkers from "../Layouts/Home";
import CoWorkersRouter from "./CoWorkersRouter";

const Router = () => {
  return (
    <Switch>
      <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/coWorkers">
            <CoWorkersRouter />
          </Route>
          {/* <Route exact path='/news' component={News} /> */}
          <Route exact path='/news/:id' render={routeProps => <SingleTitle {...routeProps} />} />
      </Layout>
      <Route path="*">{() => <Redirect to="/" />}</Route>
    </Switch>
  );
};
export default Router;
