import React, { useEffect } from "react";

import { Button, Text, Label, Container, Content } from "native-base";
import { TextInput } from "react-native";

import styles from "./style";

function Connection({
  connection,
  setUsername,
  setPassword,
  goToRegistration
}) {
  return (
    <>
      <Label style={{ marginLeft: 20 }}>username</Label>
      <TextInput
        style={styles.input}
        onChangeText={text => {
          setUsername(text);
        }}
      />
      <Label style={{ marginLeft: 20 }}>password</Label>
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
      />
      <Button style={styles.button} block rounded onPress={connection}>
        <Text>Connexion</Text>
      </Button>
      <Label style={{ marginLeft: 20 }}>Pas encore de compte ?</Label>
      <Button
        style={styles.button}
        block
        rounded
        onPress={() => goToRegistration()}
      >
        <Text>Inscription</Text>
      </Button>
    </>
  );
}

export default Connection;
