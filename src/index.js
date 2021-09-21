import React from "react";
import ReactDOM from "react-dom";
import RouteHandle from "./components/routeHandlers/";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/:id" component={RouteHandle} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
