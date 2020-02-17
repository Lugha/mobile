import React from "react";
import { View, StyleSheet } from "react-native";
import Sentence from "./Sentence";
import AnswersView from "./AnswersView";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  }
});

const GameView = ({ questions, requestQuestions }) => {
  console.log("questions", questions);
  return (
    <View style={styles.view}>
      <Sentence sentence={questions.sentence} />
      <AnswersView
        requestQuestions={requestQuestions}
        translations={questions.traductions}
      />
    </View>
  );
};

export default GameView;
