import React, { Component, createContext } from "react";

// console.log(createContext)
// createContext 方法执行后返回结果 解构为Provider ，Consumer(重名为CounterConsumer)
const { Provider, Consumer: CounterConsumer } = createContext();

// Provider 直接使用不方便，写一个组件来存储状态

class CounterProvider extends Component {
  constructor() {
    super();
    this.state = {
      count: 100,
    };
  }

  addHandler = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  lessenHandler = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <Provider
        //value 可以是任何值，建议传一个对象(共享的)
        value={{
          count: this.state.count,
          addHandler: this.addHandler,
          lessenHandler: this.lessenHandler,
        }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { CounterConsumer, CounterProvider };
