import React, { Component } from "react";
const noop = () => {};
export default class TodlList extends Component {
  handleCheckBoxChange = () => {
    //结构属性，如果找不到那么也不执行，不会报错
    const { onCompletedChange = noop, id } = this.props;

    // this.props.onCompletedChange(this.props.id);
    onCompletedChange(id);
  };
  render() {
    return (
      <ul>
        {
          <li>
            <input
              type="checkbox"
              checked={this.props.isCompleted}
              onChange={this.handleCheckBoxChange}
            />
            <span>
              {this.props.title} {this.props.isCompleted ? "完成" : "未完成"}
            </span>
          </li>
        }
      </ul>
    );
  }
}
