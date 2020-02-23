import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet, TextInput } from "react-native";
import { Container, Button, Text, Content, Label } from "native-base";

import Game from "../Game";

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

const categories = ["Jouer", "Réviser"];

const Menu = ({ navigation, user }) => {
  const navigationController = (category, key) => {
    if (key === 1 && user && user.length > 3) {
      navigation.navigate(category);
    }
  };

  return (
    <Container style={styles.container}>
      <Text style={styles.title}>{ user }</Text>
      <Container style={styles.menu}>
        <Content>
          {categories.map((category, key) => (
            <Button
              style={styles.button}
              block
              rounded
              onPress={() => navigationController(category, key + 1)}
            >
              <Text>{category}</Text>
            </Button>
          ))}
        </Content>
      </Container>
    </Container>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Menu);
