import React, { Component } from "react";
import { StatusBar } from "react-native";

import socketIOClient from "socket.io-client";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import socketManager from "./middlewares/socketManager";
import Game from "./containers/Game";
import reducers from "./reducers";

const socket = socketIOClient(`http://192.168.0.32:5001/`, {
  forceBase64: 1
});

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancer(applyMiddleware(thunk, socketManager(socket)));

const store = createStore(reducers, initialState, enhancer);

function App() {
  return (
    <Provider store={store}>
      <StatusBar hidden />
      <Game socket={socket} />
    </Provider>
  );
}

export default App;
