import React from "react";
import { Button, Text, Container } from "native-base";

import styles from "./style";

const index = ({ quitGame }) => {
  return (
    <Container style={styles.container}>
      <Text>Fin du jeu</Text>
      <Button style={styles.buttonQuit} block rounded onPress={quitGame}>
        <Text>Quitter</Text>
      </Button>
    </Container>
  );
};

export default index;
