import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import Master from "@Layouts/CoWorkers/Master/Master";
import TechnicalTeams from "@Components/Layouts/CoWorkers/TechnicalTeam/TechnicalTeams";
import CoWorkers from "@Layouts/CoWorkers";
import TechnicalTeam from "@Layouts/CoWorkers/TechnicalTeam";
import Employer from "@Layouts/CoWorkers/Employer/Employer";

const CoWorkersRouter = () => {
  let { pathname, url } = useMatch();

  return (
    <div>
      <Routes>
        <Route exact path={`${pathname}`}>
          <CoWorkers />
        </Route>
        <Route exact path={`${pathname}/master`}>
          <Master />
        </Route>
        <Route exact path={`${pathname}/technicalteam`}>
          <TechnicalTeam />
        </Route>
        <Route exact path={`${pathname}/technicalteam/:name`}>
          <TechnicalTeams />
        </Route>
        <Route exact path={`${pathname}/employer`}>
          <Employer />
        </Route>
      </Routes>
    </div>
  );
};
export default CoWorkersRouter;
