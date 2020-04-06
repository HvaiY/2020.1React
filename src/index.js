import React from "react";
import ReactDOM from "react-dom";
// 组件

// // 函数式 1
// const createApp = (props) => {
//   return (
//     <div>
//       <h1>React 适用于构建用户界面的JavaScript库</h1>
//       <p>优秀的{props.title}</p>
//     </div>
//   );
// };

// const app = createApp({ title: "16.8" });

// ReactDOM.render(app, document.querySelector("#root"));

//// 函数式 2 标签方式
// const App = (props) => {
//   return (
//     <div>
//       <h1>React 适用于构建用户界面的JavaScript库</h1>
//       <p>优秀的{props.title}</p>
//     </div>
//   );
// };

// ReactDOM.render(<App title="16.8" />, document.querySelector("#root"));

//// 类组件 2 标签方式
class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>React 适用于构建用户界面的JavaScript库</h1>
        <p>优秀的{this.props.title}</p>
      </div>
    );
  }
}

// const app = new App({ title: "16.8" }).render();
// ReactDOM.render(app, document.querySelector("#root"));
ReactDOM.render(<App title="16.8" />, document.querySelector("#root"));

// jsx 原理 组件中的所有的元素非合法的js ，ReactDOM 会将其转为虚拟的Document
// React使用 React.createElement("div",{props}) 解析 jsx 然后转为document
