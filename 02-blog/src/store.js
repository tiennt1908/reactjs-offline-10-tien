import { createStore } from "redux";
import { appReducers } from "./reducers/index";
const store = createStore(
  appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
/*
action 
- plain object
  {type:"ACT", payload:{}};
reducer
- function(initState, action)
- Luon luon tra ve State(Moi)
useSelector
useDispatch
*/
