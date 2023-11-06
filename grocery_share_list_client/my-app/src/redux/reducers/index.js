import { combineReducers } from "redux";
import userReducer from "./userReducer";
import listsReducer from "./listsReducer";

const allReducers = combineReducers({ userReducer, listsReducer });

export default allReducers;
