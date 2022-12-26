import { applyMiddleware, combineReducers, createStore } from "redux";
import postReducer from "./post/reducer";
import postDetailReducer from "./postDetail/reducer";
import categoryReducer from "./category/reducer";
import menuReducer from "./menu/reducer";

import thunk from "redux-thunk";
const rootReducer = {
  post: postReducer,
  postDetail: postDetailReducer,
  category: categoryReducer,
  menu: menuReducer,
};
const store = createStore(combineReducers(rootReducer), applyMiddleware(thunk));
export default store;
