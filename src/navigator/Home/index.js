import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Menu from "../../containers/Menu";

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  );
};
