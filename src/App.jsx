import React, { Component } from "react";
import { inject } from "mobx-react";
import { CounterBtn, CounterDisplay } from "./components";

import counterStore from "./store";

@inject("counter") // 整个数据连接进去
class App extends Component {
  render() {
    return (
      <div>
        <CounterBtn onClick={counterStore.decrement}>-</CounterBtn>
        {/* <CounterDisplay counterStore={counterStore}></CounterDisplay> */}
        {/* 可以直接在组件里面inject进行诸如 */}
        <CounterDisplay></CounterDisplay>
        <CounterBtn onClick={counterStore.increment}>+</CounterBtn>
      </div>
    );
  }
}

export default App;
