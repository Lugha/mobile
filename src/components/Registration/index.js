import React from "react";

import { Button, Text, Label, Container, Content } from "native-base";
import { TextInput } from "react-native";

import styles from "./style";

function Connection({
  registration,
  setUsername,
  setPassword,
  goToConnection
}) {
  return (
    <>
      <Label style={{ marginLeft: 20 }}>username</Label>
      <TextInput
        style={styles.input}
        onChangeText={text => setUsername(text)}
      />
      <Label style={{ marginLeft: 20 }}>password</Label>
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
      />
      <Button style={styles.button} block rounded onPress={registration}>
        <Text>Inscription</Text>
      </Button>
      <Label style={{ marginLeft: 20 }}>Déjà membre ?</Label>
      <Button
        style={styles.button}
        block
        rounded
        onPress={() => goToConnection()}
      >
        <Text>Connexion</Text>
      </Button>
    </>
  );
}

export default Connection;
