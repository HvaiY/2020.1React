import actionType from "./actionType";
import { getPosts } from "../services";

const startFeatchBlogList = () => {
  return {
    type: actionType.START_FEATCH_BLOG_LIST,
  };
};

const featchBlogListSuccess = (payload) => {
  return {
    type: actionType.FEATCH_BLOG_LIST_SUCCESS,
    payload,
  };
};

const featchBlogListFailed = (payload) => {
  return {
    type: actionType.FEATCH_BLOG_LIST_FAILED,
    payload,
  };
};

export const featchBlogList = () => (dispatch) => {
  dispatch(startFeatchBlogList());
  getPosts()
    .then((resp) => {
      if (resp.status === 200) {
        dispatch(
          featchBlogListSuccess({
            list: resp.data,
          })
        );
      } else {
        dispatch(
          featchBlogListFailed({
            message: "请求失败",
          })
        );
      }
    })
    .catch((error) => {
      dispatch(
        featchBlogListFailed({
          message: error,
        })
      );
    });
};
