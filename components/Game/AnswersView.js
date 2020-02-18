import React from "react";

import { Text, StyleSheet } from "react-native";
import Answer from "./Answer";
import { Button, Container, Content } from "native-base";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey"
  }
});

const noDataCase = requestQuestions => (
  <Button onPress={requestQuestions}>
    <Text>Request question</Text>
  </Button>
);

function AnswersView({ translations, requestQuestions }) {
  return (
    <Container style={styles.view}>
      <Content>
        {translations
          ? translations.map((translation, index) => (
              <Answer
                key={index}
                translation={translation}
                requestQuestions={requestQuestions}
              />
            ))
          : noDataCase(requestQuestions)}
      </Content>
    </Container>
  );
}

export default AnswersView;
