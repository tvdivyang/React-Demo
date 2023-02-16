import { combineReducers } from "redux";
import cartData from "./index";
import { ProductList } from "../action/ProductAction";

export default combineReducers({
  cartData,
  ProductList,
});
