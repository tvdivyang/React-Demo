import axios from "axios";
export const incNumber = () => {
  return async function (dispatch) {
    console.log("incNumber");
    const data = await axios.get("https://reqres.in/api/users?page=2");
    console.log("data ----->", data);
    dispatch({ type: "INCREMENT", data: data.data });
    console.log("responce", data);
    return {
      type: "INCREMENT",
    };
  };
};

//     import { PRODUCT_LIST } from "../Constance";
// import axios from "axios";
// // export const productList = (data) => {
// //   return {
// //     type: PRODUCT_LIST,
// //     payload : data
// //   };
// // };
// export const productList = () => {
//   return async function (dispatch) {
//     console.log("productList");
//     const responce = await axios.get("http://localhost:7001/product");
//     dispatch({ type: PRODUCT_LIST, data: responce.data });
//     console.log("responce",responce)
//   };
// };
