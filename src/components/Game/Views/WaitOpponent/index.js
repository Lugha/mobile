import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import { Container, Spinner } from "native-base";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

function WaitOpponent({ game, quitGame }) {
  useEffect(() => {
    console.log(game);
    if (!game.active) {
      quitGame();
    }
  }, [game]);

  return (
    <Container style={styles.container}>
      <Text>Waiting for the opponent to play</Text>
      <Spinner color="blue" />
    </Container>
  );
}

export default WaitOpponent;
