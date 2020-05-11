import React from "react";
import { render } from "react-dom";
import zhCN from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import App from "./App";

import { mainRoute } from "./routes";

import "./index.less";

render(
  <ConfigProvider locale={zhCN}>
    <Router>
      <Switch>
        <Route
          path="/admin"
          render={(routerProps) => {
            //TODO 权限，需要登录才能访问/admin
            return <App {...routerProps} />;
          }}
        ></Route>
        {
          //没有权限的页面可以直接访问
          mainRoute.map((route) => {
            return (
              <Route
                key={route.pathname}
                path={route.pathname}
                component={route.component}
              />
            );
          })
        }{" "}
        <Redirect to="/admin" from="/" exact />
        <Redirect to="./404" />
      </Switch>{" "}
    </Router>{" "}
  </ConfigProvider>,
  document.querySelector("#root")
);
