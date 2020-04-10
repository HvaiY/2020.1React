import React, { Component } from "react";

export default class Like extends Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
    };
  }
  handleLikedClick = () => {
    //setState 才可以渲染修改的数据
    //要修改数据 ，就是用setState，setState 可以有两个参数
    // // 第一个参数有两种情况，第一种是一个对象
    //   this.setState({
    //     isLiked: !this.state.isLiked,
    //   });
    //第二种情况 是一个方法（setState 是异步的）
    this.setState(
      (prevState, props) => {
        console.log(prevState, props);
        console.log("setState 内部的 this.state.isLiked");
        return {
          // isLiked: !this.state.isLiked, 修改值方法 ，也可以使用prevState
          isLiked: !prevState.isLiked,
        };
      },
      //setState 是异步的 ,所以需要再回调函数中才能获取到 变更后的值
      () => {
        console.log(this.state.isLiked);
      }
    );
    console.log("setState 外部的 this.state.isLiked");
  };
  render() {
    return (
      <div>
        <span onClick={this.handleLikedClick}>
          {/* 图片  http://m.fhdq.net/emoji/emojifuhao.html#emojixx   */}
          {this.state.isLiked ? "取消💓" : "喜欢💔"}
        </span>
      </div>
    );
  }
}
