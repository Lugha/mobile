import React from "react";
import { View, StyleSheet } from "react-native";
import Sentence from "./Sentence";
import AnswersView from "./AnswersView";
import { Container, Content } from "native-base";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  }
});

const GameView = ({ questions, requestQuestions }) => {
  return (
    <Container style={styles.view}>
      <Sentence sentence={questions.sentence} />
      <AnswersView
        requestQuestions={requestQuestions}
        translations={questions.traductions}
      />
    </Container>
  );
};

export default GameView;
