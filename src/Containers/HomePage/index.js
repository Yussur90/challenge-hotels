import React from "react";

import { Switch, Route } from "react-router-dom";
import DatesSearchPage from "../DatesSearchPage";
import HotelsPage from "../HotelsPage";
// import "./App.css";

function HomePage() {
  return (
    <Switch>
      <Route exact path="/" name="Home" component={DatesSearchPage} />
      <Route path="/hotelsPage" name="Hotels" component={HotelsPage} />]
    </Switch>
  );
}

export default HomePage;
