import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject((state) => {
  console.log(state);
  return {
    count: state.counter.count,
    doubleCount: state.counter.doubleCount,
  };
})
@observer
class CounterDisplay extends Component {
  render() {
    return (
      <>
        {/* <div>两倍计算：{this.props.counterStore.doubleCount}</div>
        <div>一倍计算：{this.props.counterStore.count}</div> */}
        <div>两倍计算：{this.props.doubleCount}</div>
        <div>一倍计算：{this.props.count}</div>
      </>
    );
  }
}
export default CounterDisplay;
