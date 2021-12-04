import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import usersReducer from "./usersReducers";


let reducers = combineReducers({
   profilePage: profileReducer,
   dialogPage: dialogReducer,
   usersPage: usersReducer
})


let store = createStore(reducers);

export default store;