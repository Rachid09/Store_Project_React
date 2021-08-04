import React from "react";
import { Homepage } from "./pages/homepage/homepage.jsx";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import ShopPage from "./pages/shop-page/shop-page";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={Homepage} exact path="/" />
        <Route component={ShopPage} path="/shop" />
      </Switch>
    </div>
  );
}

export default App;
