import React, { Component } from "react";

export default class CounterDisplay extends Component {
  render() {
    return <div>{this.props.count}</div>;
  }
}
