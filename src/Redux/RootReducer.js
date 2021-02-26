import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //sessionstorage can be used here

import userReducer from "./User/userReducer";
import merchReducer from "./Merchandise/merchReducer";
import eventReducer from "./Events/eventReducer";
import orderReducer from "./Order/orderReducer";
 
 

const persistConfig = {
  key: "root",
  storage,
  whitelist: [ "user","merch","orders","events"], //remove from whitelist to remove persist
};

const RootReducer = combineReducers({
  user: userReducer,
  merch: merchReducer,
  events: eventReducer,
orders:orderReducer

});

export default persistReducer(persistConfig, RootReducer);
