import React, { Component } from "react";

const withCopyright = (YourComponent) => {
  return class withCopyright extends Component {
    render() {
      return (
        <>
          {/*高阶组件注意
           ...this.props 为了将传过来的属性给到字组件  
          */}
          <YourComponent {...this.props} />
          <div>&copy; 2020 &emsp; 个人学习整理</div>
        </>
      );
    }
  };
};

export default withCopyright;
