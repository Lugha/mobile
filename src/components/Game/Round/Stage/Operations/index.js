import React from "react";
import { Text } from "react-native";
import { Container, Button } from "native-base";

import styles from "./style";

import CountdownCircle from "react-native-countdown-circle";

import Sentence from "../../../../../components/Sentence";
import Answers from "../../../../../components/Answers";
import Responser from "../../../../../components/Responser";

const index = ({
  submitStageAnswer,
  countdown,
  expression,
  response,
  round
}) => {
  return (
    <Container style={styles.container}>
      <CountdownCircle
        seconds={countdown}
        radius={30}
        borderWidth={8}
        color="#ff003f"
        bgColor="#fff"
        textStyle={{ fontSize: 20 }}
        onTimeElapsed={() => submitStageAnswer(null)}
      />
      <Text>Round:{round}</Text>
      <Sentence sentence={expression} />
      <Responser submitStageAnswer={submitStageAnswer} />
    </Container>
  );
};

export default index;
