//createStore是redux提供的一个用于创建store的方法
import { createStore } from "redux";
//引入合并后的reducer
import rootreducer from "./reducers";

//createStore 的第一个参数必须是一个reducer ,如果是多个，请再reducers 目录下先试用combinReducers合并后再导出
export default createStore(rootreducer);
