//在实际的项目中 store只有单一的一个，但是状态会有很多分类，所以我们需要划分reducer ,createStore 只能接受一个reducer ，
//所以  redux 提供了合并reducer 的方法combineReducers，注意不要手动合并
import { combineReducers } from "redux";
//引入cart reduce人，如果有多个，继续引入
import cart from "./cart";

//导出合并的reducer
export default combineReducers({
  // 把多个reduce人作为combineReducers对象传入，在外部就可以通过store.getState().cart来获取擦耳道cartReducer里面的state
  cart,
});
