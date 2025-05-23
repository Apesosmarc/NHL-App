import React from "react";
import ReactDOM from "react-dom";
import RouteHandle from "./components/routeHandlers";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import App from "./components/App";

import "./index.css";

const loadFavorite = () => {
  return parseInt(JSON.parse(localStorage.getItem("favorite")).id);
};

const hasFavorite = () => {
  if (localStorage.getItem("favorite")) {
    return true;
  }
  return false;
};

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/:id" component={RouteHandle} />
      {sessionStorage.length === 0 && hasFavorite() ? (
        <App id={loadFavorite()} />
      ) : (
        <Home />
      )}
    </Switch>
  </BrowserRouter>,
  globalThis.document.getElementById("root")
);
