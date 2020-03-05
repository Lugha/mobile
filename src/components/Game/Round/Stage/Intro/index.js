import React from "react";
import { Text } from "react-native";
import { Container, Button } from "native-base";

import CountdownCircle from "react-native-countdown-circle";

import styles from "./style";

const index = ({ goToStage, countdown }) => {
  return (
    <Container style={styles.container}>
      <Text>Le prochain jeu va démarrer</Text>
      <CountdownCircle
        seconds={countdown}
        radius={30}
        borderWidth={8}
        color="#ff003f"
        bgColor="#fff"
        textStyle={{ fontSize: 20 }}
        onTimeElapsed={() => goToStage()}
      />
    </Container>
  );
};

export default index;
