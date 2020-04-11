import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

//如果想要全局的扩展React.Component 的prototype，比如 ，想把ajax 的方法全局挂载在组件的this 上，就可以使用下面的方法
//引入所有的ajax 请求
import * as services from "./Services";
// 在prototype上挂载 http ，然后就可以在组件的内部通过this.http.方法名来执行一些操作

React.Component.prototype.http = services;

ReactDOM.render(<App />, document.querySelector("#root"));
