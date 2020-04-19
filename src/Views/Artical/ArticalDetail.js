import React, { Component } from "react";
import { BackHome } from "../../components";

export default class ArticalDetail extends Component {
  // goHome = () => {
  //   // this.props.history.push('/home')
  //   //除了这种方式还可以传参
  //   this.props.history.push({
  //     pathname: "/home",
  //     state: {
  //       id: this.props.match.params.id,
  //     },
  //   });
  // };
  render() {
    console.log(this.props);
    return (
      <div>
        文章详情{this.props.match.params.id}
        {/* <button onClick={this.goHome}>返回首页</button> */}
        <BackHome />
      </div>
    );
  }
}
