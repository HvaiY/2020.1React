import React, { Component } from "react";

export default class CounterBtn extends Component {
  render() {
    return <button>{this.props.children}</button>;
  }
}
