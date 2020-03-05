import React from "react";
import { Container, Button, Text, Content } from "native-base";

import styles from "./style";

const index = ({ username, disconnect, goToLobby }) => {
  return (
    <Container style={styles.container}>
      <Text style={styles.title}>{username}</Text>
      <Container style={styles.menu}>
        <Content>
          <Button
            style={styles.button}
            block
            rounded
            onPress={() => goToLobby()}
          >
            <Text>Jouer</Text>
          </Button>
          <Button style={styles.button} block rounded onPress={disconnect}>
            <Text>Déconnexion</Text>
          </Button>
        </Content>
      </Container>
    </Container>
  );
};

export default index;
