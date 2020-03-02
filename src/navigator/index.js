import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { GameStack } from "./Game";
import { AuthStack } from "./Auth";
import { HomeStack } from "./Home";

import LoginRegister from "../containers/Connection";

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="Home" component={HomeStack} />
        <Stack.Screen name="Game" component={GameStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
