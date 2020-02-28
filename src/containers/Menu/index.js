import React from "react";
import { connect } from "react-redux";
import { StyleSheet } from "react-native";
import { Container, Button, Text, Content } from "native-base";

import { updateUser } from "../../actions/user";

// import Game from "../Game";

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

// const categories = ["Jouer", "Réviser", ""];

const Menu = ({ navigation, user, updateUser }) => {
  function disconnect() {
    updateUser(null);
    navigation.navigate("Connection");
  }

  return (
    <Container style={styles.container}>
      <Text style={styles.title}>{user.username}</Text>
      <Container style={styles.menu}>
        <Content>
          <Button
            style={styles.button}
            block
            rounded
            onPress={() => navigation.navigate("Jouer")}
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

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, {
  updateUser
})(Menu);
