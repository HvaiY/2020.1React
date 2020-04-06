import React from "react";
import ReactDOM from "react-dom";
// npm install classnames --save 动态加载样式 第三方包
import classNames from "classnames";
// 样式组件 npm i styled-components -S
import styled from "styled-components";

import "./index.css";

// 组件 直接给Title 加载样式
const Title = styled.h1`
  color: #f00;
`;

class App extends React.Component {
  render() {
    const style = { color: "#F00" };

    return (
      <div>
        <Title>元素中的样式</Title>
        <ol>
          <li style={style}>使用style内联样式</li>
          <li className="has-text-red">
            使用class的方式，但是react 里calss 要写成className
          </li>
          <li className={classNames("a", { b: true, c: false })}>
            要动态加载不同的className就可以使用第三方包
            classNames，比如标签li就只有啊，a,b没有c
          </li>
        </ol>
      </div>
    );
  }
}

ReactDOM.render(<App title="16.8" />, document.querySelector("#root"));
