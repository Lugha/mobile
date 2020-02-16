import React, { Component } from "react";
import { StatusBar } from "react-native";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import socketManager from "./middlewares/socketManager";
import Game from "./containers/Game";
import reducers from "./reducers";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancer(applyMiddleware(socketManager()));

const store = createStore(reducers, initialState, enhancer);

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar hidden />
      <Game />
    </Provider>
  );
};

export default App;
