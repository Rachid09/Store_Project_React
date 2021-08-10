import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import { Homepage } from "./pages/homepage/homepage.jsx";
import ShopPage from "./pages/shop-page/shop-page";
import Header from "./components/header/header.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route component={Homepage} exact path="/" />
        <Route component={ShopPage} path="/shop" />
      </Switch>
    </div>
  );
}

export default App;
