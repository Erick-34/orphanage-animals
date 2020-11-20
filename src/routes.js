import React from "react";
import { Route, Switch } from "react-router-dom";

// import history from "./services/history";

import Home from "./pages/Home/Home";
import PetShop from "./pages/PetShop/PetShop";

export default function Routes() {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/petshop" component={PetShop} />
      </Switch>
  );
}
