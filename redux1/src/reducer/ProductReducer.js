
export const productData = (data = [], action) => {
    switch (action.type) {
      case "PRODUCT_LIST":
          console.log("PRODUCT_LIST", action);
        return [action.data, ...data];
    
  
      default:
        return data;
    }
  };
  
  export default cartData;
  