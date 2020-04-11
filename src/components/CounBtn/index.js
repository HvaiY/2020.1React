import React, { Component } from "react";
import { CounterConsumer } from "../../counterStore";

export class CounBtn extends Component {
  render() {
    return (
      <CounterConsumer>
        {/* CounterConsumer 组件里面只能是一个方法，那么我们写js */}
        {({ addHandler, lessenHandler }) => {
          const handler =
            this.props.type === "Add" ? addHandler : lessenHandler;
          return <button onClick={handler}>{this.props.children}</button>;
        }}
      </CounterConsumer>
    );
  }
}
