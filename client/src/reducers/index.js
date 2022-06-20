import PersonReducer from "./PersonReducer";
import PostReducer from "./PostReducer";
import { combineReducers } from "redux";
import UserReducer from "./UsersReducer";

export default combineReducers({
  user: PersonReducer,
  post: PostReducer,
  client: UserReducer,
});
