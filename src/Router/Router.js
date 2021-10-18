import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Layout from "@Components/Shared/Layout/Layout";
// ----------------- Pages -----------------
import News from "@Layouts/News";
import Home from "../Layouts/Home";
import CoWorkersRouter from "./CoWorkersRouter";
import NewsDetails from "../Layouts/News/NewsDetails";

const Router = () => {
  return (
    <Switch>
      <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/coWorkers">
            <CoWorkersRouter />
          </Route>
          <Route exact path='/news' component={News} />
          <Route exact path='/news/NewsDetails' component={NewsDetails}/>
      </Layout>

      <Route path="*">{() => <Redirect to="/" />}</Route>
    </Switch>
  );
};
export default Router;
