import { applyMiddleware, combineReducers, createStore } from "redux";
import postReducer from "./post/reducer";
import postDetailReducer from "./postDetail/reducer";
import categoryReducer from "./category/reducer";
import thunk from "redux-thunk";
const rootReducer = {
  post: postReducer,
  postDetail: postDetailReducer,
  category: categoryReducer,
};
const store = createStore(combineReducers(rootReducer), applyMiddleware(thunk));
export default store;
