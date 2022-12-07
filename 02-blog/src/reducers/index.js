import { combineReducers } from "redux";

import posts from "./posts";

export const appReducers = combineReducers({
  posts: posts,
});
