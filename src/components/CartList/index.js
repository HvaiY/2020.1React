import React, { Component } from "react";
//conncet 方法执行之后是一个高阶组件
import { connect } from "react-redux";
//导入actionCreator
import { increment, decrement, decrementAsync } from "../../actions/cart";

//可以装饰的方式来使用connect
// @connect(mapState, { increment, decrement })

class CartList extends Component {
  //这里是使用redux(非react-redux) 来处理
  // constructor() {
  //   super();
  //   this.state = {
  //     cartList: [],
  //   };
  // }

  // getState = () => {
  //   this.setState({
  //     cartList: this.props.store.getState().cart,
  //   });
  // };
  // componentDidMount() {
  //   this.getState();
  //   this.props.store.subscribe(this.getState);
  // }
  render() {
    console.log(this.props);
    return (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>商品名称</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cartList.map((item) => {
            return (
              <tr key={item.id}>
                <th>{item.id}</th>
                <th>{item.title}</th>
                <th>{item.price}</th>
                <th>
                  <button
                    onClick={this.props.decrementAsync.bind(this, item.id)}>
                    等一会再减
                  </button>
                  <button
                    // onClick={() => {
                    //   // this.props.dispatch(decrement(item.id));
                    //   //    this.props.reduce(item.id);
                    // }}
                    onClick={this.props.decrement.bind(this, item.id)}>
                    -
                  </button>
                  <span>{item.amount}</span>
                  <button
                    // onClick={() => {
                    //   // this.props.dispatch(decrement(item.id));
                    //   // this.props.add(item.id);
                    // }}
                    onClick={this.props.increment.bind(this, item.id)}>
                    +
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
//mapSttateToProps 这里的state实际就是store.getState()的值
const mapState = (state) => {
  //这里return 了什么，在之间里面就可以通过this.props来获取
  return {
    cartList: state.cart,
  };
};

//mapDispatchToProps 展开动作
const mapDispatchToProps = (dispatch) => {
  return {
    add: (id) => {
      dispatch(increment(id));
    },
    reduce: (id) => {
      dispatch(decrement(id));
    },
  };
};

// connect 方法有四个参数，常用的就是前面的两个参数
//第一个参数是mapStateToProps,作用就是从store里把state注入到当前的组件的props
//第二个参数可以mapDispatchToProps,这个主要作用是把action生成的方法注入到当前组件的props上，一般来说没必要这样用
// export default connect(mapState, mapDispatchToProps)(CartList);

//方式1 直接默认的dispatch 用this.props.disPatch
// export default connect(mapState)(CartList);
//方式2 展开动作
// export default connect(mapState, mapDispatchToProps)(CartList);
// 方式三，如果定的动作标准的 payload对象存放参数的话可以直接使用 动作作为参数传给connect
export default connect(mapState, { increment, decrement, decrementAsync })(
  CartList
);
