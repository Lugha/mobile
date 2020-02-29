import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Container, Button } from "native-base";

import CountdownCircle from "react-native-countdown-circle";

import WaitBefore from "../WaitBefore";
import WaitOpponent from "../WaitOpponent";
import Sentence from "../../Sentence";
import Answers from "../../Answers";

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

const Stage = ({ submitedAnswer, submitStageAnswer, quitGame, game }) => {
  const [countdown, setCountdown] = useState(10);

  function handleSubmitStageAnswer(key) {
    submitStageAnswer(key);
    setCountdown(10);
  }

  return !submitedAnswer ? (
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
        submitStageAnswer={handleSubmitStageAnswer}
        translations={game.stageData.traductions}
        quitGame={quitGame}
      />
    </Container>
  ) : (
    <WaitOpponent game={game} quitGame={quitGame} />
  );
};

export default Stage;
