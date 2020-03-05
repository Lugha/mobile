import React from "react";
import { Container, Text } from "native-base";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    margin: 10,
    width: 100,
    height: 100,
    backgroundColor: "#9BF19B",
    borderWidth: 1,
    borderColor: "#06BD06",
    borderRadius: 15,
    zIndex: 2
  },
  score: {
    color: "#06BD06",
    fontSize: 25,
    marginHorizontal: "auto",
    marginVertical: "auto"
  }
});

const Score = ({ score = 0 }) => {
  return (
    <Container style={styles.container}>
      <Text style={styles.score}>Score</Text>
      <Text style={styles.score}>{score}</Text>
    </Container>
  );
};

export default Score;
