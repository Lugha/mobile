import React from "react";
import { Text, StyleSheet } from "react-native";
import { Container } from "native-base";

import styles from "./style";

const Sentence = ({ sentence }) => {
  return (
    <Container style={styles.sentence}>
      <Text>{sentence}</Text>
    </Container>
  );
};

export default Sentence;
