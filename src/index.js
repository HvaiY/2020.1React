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
import { Provider } from "react-redux";

import App from "./App.jsx";
import store from "./store";

import { mainRoute } from "./routes";

import "./index.less";

render(
  <Provider store={store}>
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
    </ConfigProvider>
  </Provider>,
  document.querySelector("#root")
);
