import React from "react";
import { View, StyleSheet } from "react-native";
import Sentence from "./Sentence";
import AnswersView from "./AnswersView";
import { Container, Content } from "native-base";
import Score from "../../containers/Score";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  }
});

const GameView = ({ questions, goToNextRound }) => {
  return (
    <Container style={styles.container}>
      <Score />
      <Sentence sentence={questions.sentence} />
      <AnswersView
        goToNextRound={goToNextRound}
        translations={questions.traductions}
      />
    </Container>
  );
};

export default GameView;
