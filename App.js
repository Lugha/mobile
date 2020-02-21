import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

import { Provider } from "react-redux";
import { Text, Spinner } from "native-base";
import { createStore, applyMiddleware, compose } from "redux";

import * as Font from "expo-font";
import socketManager from "./middlewares/socketManager";
import AppNavigator from "./containers";
import reducers from "./reducers";
import logger from "redux-logger";

console.disableYellowBox = true;

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancer(
  applyMiddleware(logger),
  applyMiddleware(socketManager())
);

const store = createStore(reducers, initialState, enhancer);

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

const App = () => {
  const [isReady, changeReady] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
      });
      changeReady(true);
    }
    loadFont();
  }, []);

  if (!isReady) {
    return (
      <View style={styles.loader}>
        <Text>Loading...</Text>
        <Spinner color="blue" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <StatusBar hidden />
      <AppNavigator />
    </Provider>
  );
};

export default App;
