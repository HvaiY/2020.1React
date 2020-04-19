import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class BackHome extends Component {
  //只有router 包裹的组件才能用 .如果需要访问router提供的api 那么使用withRouter高阶组件包裹
  goHome = () => {
    // this.props.history.push('/home')
    //除了这种方式还可以传参
    this.props.history.push({
      pathname: "/home",
      state: {
        id: this.props.match.params.id,
      },
    });
  };
  render() {
    console.log(this.props);
    return <button onClick={this.goHome}>返回首页</button>;
  }
}
export default withRouter(BackHome);
