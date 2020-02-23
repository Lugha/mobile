import React from "react";

import { Button, Text, Label, Container, Content } from "native-base";
import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  button: { padding: 20, margin: 20 },
  input: {
    margin: 20,
    borderColor: "gray",
    borderWidth: 1
  }
});

function SignUp({ registration, setUsername, setPassword, setSign }) {
  return (
    <>
      <Label style={{ marginLeft: 20 }}>username</Label>
      <TextInput style={styles.input} onChangeText={text => setUsername(text)} />
      <Label style={{ marginLeft: 20 }}>password</Label>
      <TextInput style={styles.input} onChangeText={text => setPassword(text)} />
      <Button style={styles.button} block rounded onPress={() => registration()}>
        <Text>Inscription</Text>
      </Button>
      <Label style={{ marginLeft: 20 }}>Déjà membre ?</Label>
      <Button style={styles.button} block rounded onPress={() => setSign(false)}>
        <Text>Connexion</Text>
      </Button>
    </>
  );
}

export default SignUp;
