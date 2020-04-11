// 引入React提供的  createContext 方法
import React, { Component, createContext } from "react";
import ReactDOM from "react-dom";

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
class Counter extends Component {
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

class CounBtn extends Component {
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
class App extends Component {
  render() {
    return (
      <>
        <CounBtn type='Lessen'>-</CounBtn>
        <Counter></Counter>
        <CounBtn type='Add'>+</CounBtn>
      </>
    );
  }
}

ReactDOM.render(
  <CounterProvider>
    {/*CounterProvider 包裹的组件可以共享CounterProvider 的状态  */}
    <App />
  </CounterProvider>,
  document.querySelector("#root")
);
