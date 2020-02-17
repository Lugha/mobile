import React from "react";

import { Text, View, StyleSheet } from "react-native";
import Answer from "./Answer";
import { Button } from "native-base";

const styles = StyleSheet.create({
  view: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "grey",
    paddingHorizontal: "10px"
  }
});

const noDataCase = requestQuestions => (
  <Button onPress={requestQuestions}>
    <Text>Request question</Text>
  </Button>
);

function AnswersView({ translations, requestQuestions }) {
  return (
    <View style={styles.view}>
      {translations
        ? translations.map((translation, index) => (
            <Answer
              key={index}
              requestQuestions={requestQuestions}
              translation={translation}
            />
          ))
        : noDataCase(requestQuestions)}
    </View>
  );
}

export default AnswersView;
