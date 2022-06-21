import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import ReducerComponent from "./ReducerComponent";

const reducer = combineReducers({
  ReducerComponent: ReducerComponent,
});
const middleware = [thunk];
export const Store = createStore(reducer, applyMiddleware(...middleware));
