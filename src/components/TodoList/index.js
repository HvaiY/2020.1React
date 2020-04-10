import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodolList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => {
          return (
            // <TodoItem
            //   key={todo.id}
            //   title={todo.title}
            //   isCompleted={todo.isCompleted}
            // />
            <TodoItem key={todo.id} {...todo} />
          );
        })}
      </ul>
    );
  }
}
