import React from "react";

import { Button, Text } from "native-base";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { padding: 20, margin: 20 }
});

function Answer({ submitStageAnswer, translation, response }) {
  return (
    <Button
      style={styles.container}
      block
      rounded
      onPress={() => submitStageAnswer(response)}
    >
      <Text>{translation.text}</Text>
    </Button>
  );
}

export default Answer;
