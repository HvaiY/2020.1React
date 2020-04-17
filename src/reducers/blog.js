import actionType from "../actions/actionType";

const initState = {
  list: [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body:
        "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
  ],
  isLOading: false,
  message: "",
};

export default (state = initState, action) => {
  console.log(action + "action");
  switch (action.type) {
    case actionType.START_FEATCH_BLOG_LIST:
      return {
        ...state,
        isLOading: true,
      };
    case actionType.FEATCH_BLOG_LIST_SUCCESS:
      return {
        // ...state,
        isLOading: false,
        list: action.payload.list,
      };
    case actionType.FEATCH_BLOG_LIST_FAILED:
      return {
        // ...state,
        isLOading: false,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
