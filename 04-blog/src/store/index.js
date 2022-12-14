import { combineReducers, createStore } from "redux";
import postReducer from "./post/reducer";
import categoryReducer from "./category/reducer";

const rootReducer = {
  post: postReducer,
  category: categoryReducer,
};
const store = createStore(combineReducers(rootReducer));
export default store;
