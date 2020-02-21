import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Menu from "./Menu";
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
        <AppNavigator.Screen name="Menu" component={Menu} />
        <AppNavigator.Screen name="Jouer" component={CreateRoom
      } />
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;