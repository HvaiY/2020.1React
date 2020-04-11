//React Hooks 是React 16.8 出来的 新特性
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Counter = () => {
  // hook 的作用就是为了让函数式组件可以有相应的 State
  //  useState是一个方法，这个方法的的参数就是默认值，返回结果是一个数组，数据的第一个是state ，第二个相当于setState ，
  const [count, setCount] = useState({ num: 0 });
  //useEffect 参数十一个回调，不管是组件挂载还是更新都会触发这个回调方法 ，类似于componentDidMount 和compomentDidUodate的结合
  useEffect(() => {
    console.log("组件更新了");
    document.title = `当前的数量为${count.num}`;
  });

  return (
    <>
      <p> 当前的数量为 {count.num} </p>
      <button
        onClick={() => {
          setCount({ num: count.num - 1 });
        }}>
        -
      </button>
      <span> {count.num} </span>
      <button
        onClick={() => {
          //这里和setState 的不同在于这里的参数是一个新值
          setCount({ num: count.num + 1 });
        }}>
        +
      </button>
    </>
  );
};

ReactDOM.render(<Counter />, document.querySelector("#root"));
