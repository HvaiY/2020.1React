import React, { Component } from "react";
import withCopyright from "./withCopyright";

// class Another extends Component {
//   render() {
//     return <div>Another{this.props.name}</div>;
//   }
// }
///函数方式
// export default withCopyright(Another);

//使用customize-cra 插件 实现装饰器模式
@withCopyright
class Another extends Component {
  render() {
    return <div>Another{this.props.name}</div>;
  }
}

export default Another;
