import React from "react";

import { Button, Text } from "native-base";

function Answer({ requestQuestions, translation }) {
  return (
    <Button
      style={{ padding: 20, margin: 20 }}
      block
      rounded
      onPress={requestQuestions}
    >
      <Text>{translation.text}</Text>
    </Button>
  );
}

export default Answer;
