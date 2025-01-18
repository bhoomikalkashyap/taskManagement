import { combineReducers } from "redux";
import { initialReducer } from './initialReducer.js'
import { userReducer } from "./userReducer.js";


const rootReducer = combineReducers({ initialReducer, userReducer });
export default rootReducer;