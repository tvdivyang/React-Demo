
export const cartData = (data = [], action) => {
  switch (action.type) {
    case "Add_TO_CART":
        console.log("Add_T0_cart", action);
      return [action.data, ...data];
    case "REMOVE_TO_CART":
      console.log("remove to art", action);
      data.length=data.length?data.length-1:[]
      return [...data];
    case "EMPTY_CART":
      console.log("Empty to cart", action);
      data=[]
      return [...data];

    default:
      return data;
  }
};

export default cartData;
