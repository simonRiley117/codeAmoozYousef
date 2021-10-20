import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Master from "@Layouts/CoWorkers/Master/Master";
import TechnicalTeams from "@Components/Layouts/CoWorkers/TechnicalTeam/TechnicalTeams";
import CoWorkers from "@Layouts/CoWorkers";
import TechnicalTeam from "@Layouts/CoWorkers/TechnicalTeam";
import Employer from "@Layouts/CoWorkers/Employer/Employer";

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
        <Route exact path={`${path}/technicalteam`}>
          <TechnicalTeam />
        </Route>
        <Route exact path={`${path}/technicalteam/:name`}>
          <TechnicalTeams />
        </Route>
        <Route exact path={`${path}/employer`}>
          <Employer />
        </Route>
      </Switch>
    </div>
  );
};
export default CoWorkersRouter;
