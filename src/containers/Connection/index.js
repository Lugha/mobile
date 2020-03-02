import { CREATED } from "http-status";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import config from "../../../config";

import axiosInstance from "../../services/axios";

import { Container, Button, Text, Content, Label } from "native-base";
import { StyleSheet } from "react-native";

import SignIn from "../../components/Connection/SignIn";
import SignUp from "../../components/Connection/SignUp";
import { TextInput } from "react-native-gesture-handler";

import { connectUser, updateUser } from "../../actions/user";

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: "center"
  },
  menu: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    margin: 20
  },
  input: {
    margin: 20,
    borderColor: "gray",
    borderWidth: 1
  },
  container: {
    padding: 20
  }
});

const Connection = ({ navigation, user, connectUser }) => {
  const [sign, setSign] = useState(false);
  const [username, updateUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [created, setCreated] = useState(false);

  function connect() {
    connectUser({ username, password });
    setPassword(null);
  }

  async function register() {
    const { status } = await axiosInstance.registerUser({ username, password });

    if (status === CREATED) {
      setCreated(true);
    }
  }

  useEffect(() => {
    if (user && user.token) {
      navigation.navigate("Home");
    }
  }, [user]);

  return (
    <Container style={styles.container}>
      <Text style={styles.title}>Lugha</Text>
      <TextInput onChange={text => updateUsername(text)} />
      <Container style={styles.menu}>
        <Content>
          {sign ? (
            <SignUp
              registration={register}
              updateUsername={updateUsername}
              setPassword={setPassword}
              setSign={setSign}
            />
          ) : (
            <SignIn
              connection={connect}
              updateUsername={updateUsername}
              setPassword={setPassword}
              setSign={setSign}
            />
          )}
          {created && (
            <Text>Ton compte a bien été crée, tu peux te connecter =)</Text>
          )}
        </Content>
      </Container>
    </Container>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, {
  connectUser
})(Connection);
