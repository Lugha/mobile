import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Sentence from "./Sentence";
import AnswersView from "./AnswersView";
import { Container, Content, Button } from "native-base";
import Score from "../../containers/Score";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  },
  button: {
    marginLeft: 'auto',
    marginRight: 20,
    width: 100,
  },
});

const GameView = ({ questions, goToNextRound, quitGame }) => {
  return (
    <Container style={styles.container}>
      <Score />
      <Button
        style={styles.button}
        block
        rounded
        onPress={quitGame}
      >
        <Text>Quitter</Text>
      </Button>
      <Sentence sentence={questions.sentence} />
      <AnswersView
        goToNextRound={goToNextRound}
        translations={questions.traductions}
      />
    </Container>
  );
};

export default GameView;
