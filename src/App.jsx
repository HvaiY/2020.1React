import React, { Component } from "react";

import { CounterBtn, CounterDisplay } from "./components";

import counterStore from "./store";

export default class App extends Component {
  render() {
    return (
      <div>
        <CounterBtn onClick={counterStore.decrement}>-</CounterBtn>
        <CounterDisplay counterStore={counterStore}></CounterDisplay>
        <CounterBtn onClick={counterStore.increment}>+</CounterBtn>
      </div>
    );
  }
}
