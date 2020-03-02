import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Lobby from "../../containers/GameLobby";
import BeginGame from "../../screens/Game/BeginGame";
import BeginRound from "../../screens/Game/BeginRound";
import BeginStage from "../../screens/Game/BeginStage";
import Stage from "../../screens/Game/Stage";
import WaitingOpponent from "../../screens/Game/WaitingOpponent";
import EndRound from "../../screens/Game/EndRound";
import EndGame from "../../screens/Game/EndGame";

export const Stack = createStackNavigator();

export const GameStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Lobby" component={Lobby} />
      <Stack.Screen name="BeginGame" component={BeginGame} />
      <Stack.Screen name="BeginRound" component={BeginRound} />
      <Stack.Screen name="BeginStage" component={BeginStage} />
      <Stack.Screen name="Stage" component={Stage} />
      <Stack.Screen name="WaitingOpponent" component={WaitingOpponent} />
      <Stack.Screen name="EndRound" component={EndRound} />
      <Stack.Screen name="EndGame" component={EndGame} />
    </Stack.Navigator>
  );
};
