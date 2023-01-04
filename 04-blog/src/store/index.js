import { applyMiddleware, combineReducers, createStore } from "redux";
import postReducer from "./post/reducer";
import categoryReducer from "./category/reducer";
import menuReducer from "./menu/reducer";
import userReducer from "./user/reducer";
import commentReducer from "./comment/reducer";
import thunk from "redux-thunk";
const rootReducer = {
  post: postReducer,
  category: categoryReducer,
  menu: menuReducer,
  user: userReducer,
  comment: commentReducer
};
const store = createStore(combineReducers(rootReducer), applyMiddleware(thunk));
export default store;
