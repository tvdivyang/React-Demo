export const addToCart = (data) => {
  console.log(data);
  return {
    type: "Add_TO_CART",
    data: data,
  };
};
export const removeFromCart = (data) => {
  console.log(data);
  return {
    type: "REMOVE_TO_CART",
    data: data,
  };
};
export const emptyCart = (data) => {
  console.log(data);
  return {
    type: "EMPTY_CART",
    data: data,
  };
};
