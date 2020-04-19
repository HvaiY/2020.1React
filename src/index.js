import React from "react";
import { render } from "react-dom";
import App from "./App";
import { HashRouter as Router, Route } from "react-router-dom";
//BrowserRouter 地址不带#符号
render(
  <Router>
    <Route component={App} />
  </Router>,

  document.querySelector("#root")
);
