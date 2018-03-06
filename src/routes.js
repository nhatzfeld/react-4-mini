import React from "react";
import { Switch, Route } from "react-router-dom";

import Route1 from "./components/Route1";
import Route2 from "./components/Route2";
import Route3 from "./components/Route3";

export default (
  <Switch>
    <Route component={Route1} path="/" exact />
    <Route component={Route2} path="/Route2" />
    <Route component={Route3} path="/Route3" />
  </Switch>
);
