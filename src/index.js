import React from "react";
import ReactDOM from "react-dom";
import RouteHandle from "./components/routeHandlers/";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={RouteHandle} />
      <Home />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
