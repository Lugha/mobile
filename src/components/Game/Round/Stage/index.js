import React from "react";
import { connect } from "react-redux";
import { Text } from "react-native";
import { Container, Button } from "native-base";

import styles from "./style";

import CountdownCircle from "react-native-countdown-circle";

import Sentence from "../../../../components/Sentence";
import Answers from "../../../../components/Answers";

const index = ({
  submitStageAnswer,
  countdown,
  sentence,
  traductions,
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
      <Sentence sentence={sentence} />
      <Answers
        submitStageAnswer={submitStageAnswer}
        translations={traductions}
      />
    </Container>
  );
};

export default index;
