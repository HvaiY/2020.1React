import axios from "axios"; //npm install axios -S       npmjs 获取包

import apis from "./apis";

const ajax = axios.create({
  baseURL: apis.baseURL,
});

//在这里还需要做一个全局拦截器处理

export const getTodo = () => {
  return ajax.get(apis.getTodo);
};
