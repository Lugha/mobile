import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Connection from "../containers/Auth/Connection";
import Registration from "../containers/Auth/Registeration";
import Menu from "../containers/Menu";
import Lobby from "../containers/Lobby";

import WaitingOpponent from "../containers/Game/WaitingOpponent";
import GameIntro from "../containers/Game/Intro";
import GameResume from "../containers/Game/Resume";
import GameRoundIntro from "../containers/Game/Round/Intro";
import GameRoundResume from "../containers/Game/Round/Resume";
import GameStageIntro from "../containers/Game/Round/Stage/Intro";
import GameStage from "../containers/Game/Round/Stage";

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Menu"
      >
        <Stack.Screen name="Connection" component={Connection} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Lobby" component={Lobby} />
        <Stack.Screen name="WaitingOpponent" component={WaitingOpponent} />
        <Stack.Screen name="GameIntro" component={GameIntro} />
        <Stack.Screen name="GameResume" component={GameResume} />
        <Stack.Screen name="GameRoundIntro" component={GameRoundIntro} />
        <Stack.Screen name="GameRoundResume" component={GameRoundResume} />
        <Stack.Screen name="GameStageIntro" component={GameStageIntro} />
        <Stack.Screen name="GameStage" component={GameStage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
