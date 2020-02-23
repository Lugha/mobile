import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Connection from "./Connection";
import Menu from "./Menu";
import Game from "./Game";
import CreateRoom from "../components/Game/CreateRoom";

const AppNavigator = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <AppNavigator.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <AppNavigator.Screen name="Connection" component={Connection} />
        <AppNavigator.Screen name="Menu" component={Menu} />
        <AppNavigator.Screen name="Jouer" component={CreateRoom} />
        <AppNavigator.Screen name="Game" component={Game} />
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
