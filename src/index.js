import React from "react";
import ReactDOM from "react-dom";
//Provider是react-redux提供的一个组件
import { Provider } from "react-redux";

import App from "./App";

import store from "./store";

window.store = store;

ReactDOM.render(
  //一帮直接把这个组件放在程序的最顶层，这个书剑必须有一个store属性，这个store属性就是我们创建的那个store
  //只要在最外层包裹了这个Provider ,那么所有的后代组件都可以使用redux.connect做连接
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
