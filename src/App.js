//可以使用rcc 直接生成默认的组件
import React, { Component, Fragment } from "react";
import { TodoHeader, TodoInput, TodoList } from "./components";
import TodolList from "./components/TodoList";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        {/* "//Fragment react 提供的类型空标签,组件
        只允许一个根标签，Fragment可以同来合并，这个也可以包裹<></>" */}
        <TodoHeader />
        <TodoInput />
        <TodolList />
      </Fragment>
    );
  }
}
