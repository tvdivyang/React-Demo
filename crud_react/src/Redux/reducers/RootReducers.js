import changeTheNumber from "./Postapi";
import updatePRoduct from "./Postapi";
import deletePRoduct from "./Postapi";
import updateDatas from "./Postapi";
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    changeTheNumber,deletePRoduct,updatePRoduct,updateDatas,
});

export default rootReducer;