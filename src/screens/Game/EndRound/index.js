import React, { useState } from "react";

import { Text, Container, Button } from "native-base";
import { StyleSheet } from "react-native";
import CountdownCircle from "react-native-countdown-circle";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  }
});

function EndRound({ route, navigation }) {
  const countdown = 5;

  const { game, setWaitingTimer } = route.params;

  // function where() {
  //   if (game.actualRound < game.roundTotal) {
  //     navigation.navigate("BeginRound");
  //   } else {
  //     navigation.navigate("EndGame");
  //   }
  // }

  return (
    <Container style={styles.container}>
      <CountdownCircle
        seconds={countdown}
        radius={30}
        borderWidth={8}
        color="#ff003f"
        bgColor="#fff"
        textStyle={{ fontSize: 20 }}
        onTimeElapsed={() => null}
      />
      <Text>End of the round</Text>
      <Text>Explications</Text>
    </Container>
  );
}

export default EndRound;
