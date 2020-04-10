//react 里面通过ref 来获取组件或者dom元素，要是用ref之前必须调用React.createRef的方法来创建一个ref
import React, { Component, createRef } from "react";
import PropType from "prop-types";

export default class TodoInput extends Component {
  // 类组件里面 类别校验 为静态方法
  static propTypes = {
    //children: PropType.string,
    name: PropType.string,
  };
  // 默认值
  static defaultProps = {
    name: "Add",
  };
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
    this.inputDom = createRef();
    // this.handleAddClickCopy = this.handleAddClick.bind(this);
  }
  handleInpurChange = (e) => {
    console.log(e.currentTarget.value);
    this.setState({
      inputValue: e.currentTarget.value,
    });
  };

  // handleAddClick(id) {
  //   console.log(this.state, id);
  // }
  // //推荐使用bind来传递参数
  // handleAddClick = (id) => {
  //   console.log(this.state, id);
  // };
  handleAddClick = () => {
    console.log(this, this.inputDom);
    this.props.addTodo(this.state.inputValue);
  };

  handleKeyUp = (e) => {
    // console.log(e.keyCode);
    if (this.state.inputValue === "") {
      return;
    }
    if (e.keyCode === 13) {
      this.handleAddClick();
      this.setState(
        {
          inputValue: "",
        },
        () => {
          this.inputDom.current.focus();
        }
      );
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInpurChange}
          onKeyUp={this.handleKeyUp}
          ref={this.inputDom}
        />
        <button
          // onClick={() => {
          //   this.handleAddClickCopy(123);
          // }}

          // //参数绑定
          // onClick={this.handleAddClick.bind(this, 123)}
          onClick={this.handleAddClick}
        >
          {this.props.name}
        </button>
      </div>
    );
  }
}
