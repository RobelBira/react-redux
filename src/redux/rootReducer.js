import { combineReducers } from "redux";
import cakeReducer from "./cake/CakeReducer";
import icecreamReducer from "./icecream/IcecreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});
 

export default rootReducer