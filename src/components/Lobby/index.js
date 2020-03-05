import React from "react";
import { Text } from "react-native";
import { Container, Spinner, Button } from "native-base";

import styles from "./style";

const index = ({ cancel }) => {
  return (
    <Container style={styles.container}>
      <Text>Waiting for battle</Text>
      <Spinner color="blue" />
      <Button style={styles.buttonCancel} block rounded onPress={cancel}>
        <Text>Annuler</Text>
      </Button>
    </Container>
  );
};

export default index;
