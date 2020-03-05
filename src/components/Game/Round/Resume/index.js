import React from "react";
import { Text, Container, Button } from "native-base";

import styles from "./style";

import CountdownCircle from "react-native-countdown-circle";

const index = ({ navigation, countdown, endRoundOrGame }) => {
  return (
    <Container style={styles.container}>
      <CountdownCircle
        seconds={countdown}
        radius={30}
        borderWidth={8}
        color="#ff003f"
        bgColor="#fff"
        textStyle={{ fontSize: 20 }}
        onTimeElapsed={() => endRoundOrGame()}
      />
      <Text>End of the round</Text>
      <Text>Explications</Text>
    </Container>
  );
};

export default index;
