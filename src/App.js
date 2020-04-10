//可以使用rcc 直接生成默认的组件
import React, { Component, Fragment } from "react";
import { TodoHeader, TodoInput, TodoList, Like } from "./components";
import TodolList from "./components/TodoList";

export default class App extends Component {
  // 组件的state ，有state 的就是非受控组件,函数式组件是受控组件，有state 的也可能是半受控组件(同时用了props)
  // //state 方式1
  // state = {
  //   desc: "待办事项",
  //   title: "待办事项Title",
  // };
  //方式2  构造器
  constructor() {
    super();
    this.state = {
      desc: "待办事项",
      title: "待办事项Title",
      article: "<div>我是标签字符串，<li>01</li><li>02</li></div>",
      todos: [
        {
          id: 1,
          title: "起床",
          isCompleted: true,
        },
        {
          id: 2,
          title: "吃饭",
          isCompleted: false,
        },
      ],
    };
  }
  render() {
    return (
      <Fragment>
        {/* {this.state.todos.map((todo) => {
          return (
            <div key={todo.id}>
              {todo.title} {todo.isCompleted ? "完成" : "未完成"}
            </div>
          );
        })}

        {<div dangerouslySetInnerHTML={{ __html: this.state.article }} />} */}

        {/* "//Fragment react 提供的类型空标签,组件
        只允许一个根标签，Fragment可以同来合并，这个也可以包裹<></>" */}
        <TodoHeader desc={this.state.desc} x={1} y={2}>
          {this.state.title}
        </TodoHeader>
        <TodoInput name="添加">这是默认值</TodoInput>
        <TodolList todos={this.state.todos} />
        <Like />
      </Fragment>
    );
  }
}
