import React, { Component } from "react";
import PropType from "prop-types";

export default class TodoInput extends Component {
  // 类组件里面 类别校验 为静态方法
  static propTypes = {
    //children: PropType.string,
    name: PropType.string,
  };
  // 默认值
  static defaultProps = {
    name: "Add",
  };
  render() {
    return (
      <div>
        <input type="text" defaultValue={this.props.children}></input>
        <button>{this.props.name}</button>
      </div>
    );
  }
}
