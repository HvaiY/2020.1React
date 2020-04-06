//可以默认 index.js 其它需要导入该js文件 只要导入 地址就行 index.js 可以省略
// 默认约定 导出的名称就是 目录文件夹名称 也就是组件的名称
import React, { Component } from "react";

export default class TodoHeadler extends Component {
  render() {
    return <h1>TodoHeadler 待办事项</h1>;
  }
}
