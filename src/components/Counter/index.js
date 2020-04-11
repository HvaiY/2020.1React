import React, { Component } from "react";
import { CounterConsumer } from "../../counterStore";

export class Counter extends Component {
  render() {
    return (
      <CounterConsumer>
        {/* 将参数count解构出来 */}
        {(arg) => {
          console.log(arg);
          return <span>{arg.count}</span>;
        }}
      </CounterConsumer>
    );
  }
}
