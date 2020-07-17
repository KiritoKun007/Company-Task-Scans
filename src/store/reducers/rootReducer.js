import { combineReducers } from "redux";
import { scansReducer } from "./scans";

export const rootReducer = combineReducers({
    scans: scansReducer
})