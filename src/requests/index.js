import axios from "axios";
import {
  message
} from "antd";

const isDev = process.env.NODE_ENV === "development";

const service = axios.create({
  baseURL: isDev ? "http://rap2.taobao.org:38080/app/mock/252981" : "",
});

service.interceptors.request.use((config) => {
  console.log(config);
  config.data = Object.assign({}, config.data, {
    // authToken:window.localStorage.getItem('authToken')
    authToken: "itisToken",
  });
  return config;
});

service.interceptors.response.use((resp) => {
  console.log("messagess");
  // console.log(resp.data);
  if (resp.data.code === 200) {
    return resp.data;
  } else {
    //全局异常处理
    message.error("请求错误");
  }
});

//获取文章列表
export const getArticles = (offset = 0, limited = 10) => {
  return service.post("/api/v1/articleList", {
    offset,
    limited,
  });
};

//通过Id 删除一篇文章
export const deleteArticleById = (id) => {
  return service.post(`/api/v1/articleDelete/${id}`);
};

//通过Id 获取详情
export const getArticleById = (id) => {
  return service.post(`/api/v1/article/${id}`);
};

//保存
export const saveArticle = (id, data) => {
  return service.post(`/api/v1/articleEdit/${id}`, data);
};