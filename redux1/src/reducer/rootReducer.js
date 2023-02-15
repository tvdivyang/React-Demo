import { combineReducers } from "redux";
import cartData from "../reducer/index";
import { ProductList } from "../action/ProductAction";


export default combineReducers({
    cartData,
    ProductList
})