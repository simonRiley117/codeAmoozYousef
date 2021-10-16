import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Master from "../Layouts/CoWorkers/Master/Master";

const CoWorkersRouter = () => {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={`${path}/master`}>
          <Master />
        </Route>
      </Switch>
    </div>
  );
};
export default CoWorkersRouter;
