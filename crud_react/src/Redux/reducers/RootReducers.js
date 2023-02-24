import changeTheNumber from "./Postapi";
import updatePRoduct from "./Postapi";
import deletePRoduct from "./Postapi";
import postdatas from "./Postapi";
import updateDatas from "./Postapi";
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    changeTheNumber,deletePRoduct,updatePRoduct,updateDatas,postdatas
});

export default rootReducer;