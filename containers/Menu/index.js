import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Container, Button, Text, Content } from "native-base";

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
  container: {
    padding: 20
  }
});

const categories = ["Jouer", "Réviser"];

const Menu = ({ navigation }) => {
  return (
    <Container style={styles.container}>
      <Text style={styles.title}>Lugha</Text>
      <Container style={styles.menu}>
        <Content>
          {categories.map((category, key) => (
            <Button
              style={styles.button}
              block
              rounded
              onPress={() => navigation.navigate(category)}
            >
              <Text>{category}</Text>
            </Button>
          ))}
        </Content>
      </Container>
    </Container>
  );
};

export default Menu;
