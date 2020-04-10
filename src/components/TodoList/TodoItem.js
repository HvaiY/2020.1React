import React, { Component } from "react";

export default class TodlList extends Component {
  render() {
    return (
      <ul>
        {
          <li>
            {this.props.title} {this.props.isCompleted ? "完成" : "未完成"}
          </li>
        }
      </ul>
    );
  }
}
