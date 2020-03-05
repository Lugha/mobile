import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { Container, Spinner } from "native-base";

import styles from "./style";

function WaitingOpponent() {
  return (
    <Container style={styles.container}>
      <Text>Waiting for the opponent to play</Text>
      <Spinner color="blue" />
    </Container>
  );
}

export default WaitingOpponent;
