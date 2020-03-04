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

function WaitingOpponent({ route }) {
  const { game, quitGame } = route.params;

  useEffect(() => {//ne fonctionne plus --> normalement
    console.log({ gameactive: game.active });
    if (!game.active) quitGame();
  }, [game.active]);

  return (
    <Container style={styles.container}>
      <Text>Waiting for the opponent to play</Text>
      <Spinner color="blue" />
    </Container>
  );
}

export default WaitingOpponent;
