import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Master from "@Layouts/CoWorkers/Master/Master";
import CoWorkers from "@Layouts/CoWorkers";

const CoWorkersRouter = () => {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={`${path}`}>
          <CoWorkers />
        </Route>
        <Route exact path={`${path}/master`}>
          <Master />
        </Route>
      </Switch>
    </div>
  );
};
export default CoWorkersRouter;
