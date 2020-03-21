import React, { useState } from "react";
import { TextInput, Text } from "react-native";
import { Button, Container } from "native-base";

import styles from "./style";

const index = ({ submitStageAnswer }) => {
  const [answer, setAnswer] = useState(null);

  return (
    <Container style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => setAnswer(parseInt(text), 10)}
      />
      <Button block rounded onPress={() => submitStageAnswer(answer)}>
        <Text>Répondre</Text>
      </Button>
    </Container>
  );
};

export default index;
