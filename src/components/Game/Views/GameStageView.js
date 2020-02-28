import React from "react";
import { StyleSheet, Text } from "react-native";
import Sentence from "../Sentence";
import Answers from "../Answers";
import { Container, Button } from "native-base";
// import Score from "../../../containers/Score";

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

const GameStageView = ({ submitStageAnswer, quitGame, game }) => {
  return (
    <Container style={styles.container}>
      {/* <Score /> */}
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

export default GameStageView;