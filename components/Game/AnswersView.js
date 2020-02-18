import React from "react";

import { Text, View, StyleSheet, FlatList } from "react-native";
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

const extractKey = ({ id }) => id;

function AnswersView({ translations, requestQuestions }) {
  const renderItem = ({ item }) => (
    <Answer translation={item} requestQuestions={requestQuestions} />
  );

  return (
    <Container style={styles.view}>
      <Content>
        {translations ? (
          <FlatList
            data={translations}
            keyExtractor={extractKey}
            renderItem={renderItem}
          />
        ) : (
          noDataCase(requestQuestions)
        )}
      </Content>
    </Container>
  );
}

export default AnswersView;
