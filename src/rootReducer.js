import { combineReducers } from "redux";
import { h1Constants, h1Reducer } from "./features/h1";

export const rootReducer = combineReducers({
  [h1Constants.H1_NAMESPACE]: h1Reducer.applyH1Reducer,
});
