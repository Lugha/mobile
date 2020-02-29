import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Container, Button } from "native-base";

import Stage from "../Stage";

import CountdownCircle from "react-native-countdown-circle";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  }
});

const WaitBefore = ({ submitedAnswer, submitStageAnswer, quitGame, game }) => {
  const [isStage, setisStage] = useState(false);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    setisStage(false);
  }, [game.stageData]);

  return !isStage ? (
    <Container style={styles.container}>
      <Text>Le prochain round va démarrer</Text>
      <CountdownCircle
        seconds={countdown}
        radius={30}
        borderWidth={8}
        color="#ff003f"
        bgColor="#fff"
        textStyle={{ fontSize: 20 }}
        onTimeElapsed={() => setisStage(true)}
      />
    </Container>
  ) : (
    <Stage
      submitedAnswer={submitedAnswer}
      submitStageAnswer={submitStageAnswer}
      quitGame={quitGame}
      game={game}
    />
  );
};

export default WaitBefore;
