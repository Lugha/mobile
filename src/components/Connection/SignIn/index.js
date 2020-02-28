import React, { useEffect } from "react";

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

function SignIn({ connection, updateUsername, setPassword, setSign }) {
  return (
    <>
      <Label style={{ marginLeft: 20 }}>username</Label>
      <TextInput
        style={styles.input}
        onChangeText={text => {
          updateUsername(text);
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
      <Button style={styles.button} block rounded onPress={() => setSign(true)}>
        <Text>Inscription</Text>
      </Button>
    </>
  );
}

export default SignIn;
