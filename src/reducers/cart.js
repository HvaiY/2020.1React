//为了避免actionType重复，一般会把actionType放在一个文件里面同一管理，也可以避免写错actionType
import actionType from "../actions/actionType";

//初始化state
const initState = [
  {
    id: 1,
    title: "Apple",
    price: 8888.66,
    amount: 10,
  },
  {
    id: 2,
    title: "Orange",
    price: 6666.66,
    amount: 10,
  },
];
//创建购物车reducer,reducer的固定写法是两个参数，一个个是state并赋值默认值，第二个是action
export default (state = initState, action) => {
  //根据不同的action.Type 做不一样的处理，返回的类型要一样
  switch (action.type) {
    case actionType.CART_AMOUNT_INCREMENT:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          item.amount += 1;
        }
        return item;
      });
    case actionType.CART_AMOUNT_DECREMENT:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          item.amount -= 1;
        }
        return item;
      });
    //一定要有default ，当actionType不对的时候，可以返回一个默认对象
    default:
      return state;
  }
};
