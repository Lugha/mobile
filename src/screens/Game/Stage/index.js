import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Container, Button } from "native-base";

import CountdownCircle from "react-native-countdown-circle";

import Sentence from "../../../components/Game/Sentence";
import Answers from "../../../components/Game/Answers";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  },
  buttonQuit: {
    marginLeft: "auto",
    marginRight: 20,
    marginTop: 20,
    width: 100
  }
});

const Stage = ({ route }) => {
  const countdown = 10;
  const { submitStageAnswer, quitGame, game } = route.params;

  return (
    <Container style={styles.container}>
      <CountdownCircle
        seconds={countdown}
        radius={30}
        borderWidth={8}
        color="#ff003f"
        bgColor="#fff"
        textStyle={{ fontSize: 20 }}
        onTimeElapsed={() => submitStageAnswer(null)}
      />
      <Text>Round:{game.actualRound}</Text>
      <Button style={styles.buttonQuit} block rounded onPress={quitGame}>
        <Text>Quitter</Text>
      </Button>
      <Sentence sentence={game.stageData.sentence} />
      <Answers
        submitStageAnswer={submitStageAnswer}
        translations={game.stageData.traductions}
        quitGame={quitGame}
      />
    </Container>
  );
};

export default Stage;
