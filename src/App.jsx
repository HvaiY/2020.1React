import React, { Component } from "react";

import { CounterBtn, CounterDisplay } from "./components";

export default class App extends Component {
  render() {
    return (
      <div>
        <CounterBtn>-</CounterBtn>
        <CounterDisplay count={10}></CounterDisplay>
        <CounterBtn>+</CounterBtn>
      </div>
    );
  }
}
