import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //sessionstorage can be used here

import userReducer from "./User/userReducer";
 

const persistConfig = {
  key: "root",
  storage,
  whitelist: [ "user"], //remove from whitelist to remove persist
};

const RootReducer = combineReducers({
  user: userReducer,


});

export default persistReducer(persistConfig, RootReducer);
