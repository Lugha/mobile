import React, { useState, useEffect } from "react";

import { Button, Text, Container } from "native-base";
import { StyleSheet } from "react-native";

import EndRound from "../EndRound";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  },
  buttonQuit: {
    marginLeft: "auto",
    marginRight: 20,
    marginTop: 20,
    width: 100
  }
});

function EndGame({ quitGame, game }) {
  return (
    <Container style={styles.container}>
      <Text>Fin du jeu</Text>
      <Button style={styles.buttonQuit} block rounded onPress={quitGame}>
        <Text>Quitter</Text>
      </Button>
    </Container>
  );
}

export default EndGame;
