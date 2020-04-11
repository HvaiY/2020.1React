// 引入React提供的  createContext 方法
import React from "react";
import ReactDOM from "react-dom";

import { CounterProvider } from "./counterStore";
import { App } from "./App";

ReactDOM.render(
  <CounterProvider>
    {/*CounterProvider 包裹的组件可以共享CounterProvider 的状态  */}
    <App />
  </CounterProvider>,
  document.querySelector("#root")
);
