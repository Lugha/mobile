import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginRegister from "../../containers/Connection";

export const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="LoginRegister" component={LoginRegister} />
    </Stack.Navigator>
  );
};
