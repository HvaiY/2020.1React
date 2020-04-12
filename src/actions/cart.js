import actionTYpe from "./actionType";

export const increment = (id) => {
  return {
    type: actionTYpe.CART_AMOUNT_INCREMENT,
    payload: {
      id,
    },
  };
};

export const decrement = (id) => {
  return {
    type: actionTYpe.CART_AMOUNT_DECREMENT,
    payload: {
      id,
    },
  };
};
