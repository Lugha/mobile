import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Container, Button } from "native-base";

import { useCountdown } from "../../../../hooks/useCountdown";

import GameWaitOpponent from "../GameWaitOpponent";
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

const GameStage = ({ submitedAnswer, submitStageAnswer, quitGame, game }) => {
  const [countdown, setCountdown] = useState(10);

  useCountdown(
    () => {
      submitStageAnswer(null);
    },
    countdown,
    setCountdown
  );

  return !submitedAnswer ? (
    <Container style={styles.container}>
      <Text>{countdown} / s</Text>
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
  ) : (
    <GameWaitOpponent />
  );
};

export default GameStage;
