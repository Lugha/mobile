import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Connection from "./Connection";
import Menu from "./Menu";
import GameBuilder from "./Game";
import GameSetup from "../components/Game/GameSetup";

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
        <AppNavigator.Screen name="Jouer" component={GameSetup} />
        <AppNavigator.Screen name="Game" component={GameBuilder} />
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
