import React from "react";
import { Text, StyleSheet } from "react-native";
import { Container } from "native-base";

const styles = StyleSheet.create({
  sentence: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

const Sentence = ({ sentence }) => {
  return (
    <Container style={styles.sentence}>
      <Text>{sentence}</Text>
    </Container>
  );
};

export default Sentence;
