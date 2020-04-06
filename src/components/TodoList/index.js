import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodolList extends Component {
  render() {
    return (
      <ul>
        <TodoItem />
      </ul>
    );
  }
}
