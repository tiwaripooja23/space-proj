import { combineReducers } from "redux";
import spaceListReducer from "./spaceList/spaceListReducer";




/*common reducer functiom*/
const commonRootReducer = combineReducers({
  space: spaceListReducer,
});

export default commonRootReducer;
