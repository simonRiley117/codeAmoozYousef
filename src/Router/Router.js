import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Layout from "@Components/Shared/Layout/Layout";
// ----------------- Pages -----------------
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
      </Layout>

      <Route path="*">{() => <Redirect to="/" />}</Route>
    </Switch>
  );
};
export default Router;
