import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class CounterDisplay extends Component {
  render() {
    return (
      <>
        <div>两倍计算：{this.props.counterStore.doubleCount}</div>
        <div>一倍计算：{this.props.counterStore.count}</div>
      </>
    );
  }
}
export default CounterDisplay;
