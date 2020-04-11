import React, { Component } from "react";
const noop = () => {};
export default class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      completedText: "",
    };
  }
  // 构造函数只能执行一次，初始化的State那么拼接的文本需要改变 那么使用组件生命周期下的 getDerivedStateFromProps来改变State
  // 组件生命周期说明  https://zh-hans.reactjs.org/docs/react-component.html
  static getDerivedStateFromProps(props) {
    return {
      completedText: props.isCompleted ? "完成" : "未完成",
    };
  }

  handleCheckBoxChange = () => {
    //结构属性，如果找不到那么也不执行，不会报错
    const { onCompletedChange = noop, id } = this.props;

    // this.props.onCompletedChange(this.props.id);
    onCompletedChange(id);
  };
  //利用组件生命周期来控制并优化 但不一定严格执行，优化最终还是用对应组件 PureComponent
  shouldComponentUpdate(nextProps, netxSatte) {
    // console.log(nextProps.isCompleted, this.props.isCompleted);
    // console.log(nextProps.isCompleted !== this.props.isCompleted);
    return nextProps.isCompleted !== this.props.isCompleted;
  }

  render() {
    // 测试渲染几次
    console.log(`TodoItem ${this.props.title} render`);

    const { isCompleted, title } = this.props;
    return (
      <ul>
        {
          <li>
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={this.handleCheckBoxChange}
            />
            <span>
              {title} {this.completedText}
            </span>
          </li>
        }
      </ul>
    );
  }
}
