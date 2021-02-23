import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from './App';
import RootReducer from "../src/Redux/RootReducer";
import { persistStore } from "redux-persist";
import reportWebVitals from './reportWebVitals';
import { PersistGate } from "redux-persist/integration/react";
import { applyMiddleware } from "redux";
import logger from "redux-logger";


const middlewares = [logger];
export const store = createStore(RootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
const app = (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
       
        <App />
    
    </PersistGate>
  </Provider>
);

ReactDOM.render(
 
     app, document.getElementById('root')
 

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
