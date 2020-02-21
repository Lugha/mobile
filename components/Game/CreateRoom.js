import React, { useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { Container, Content, Spinner } from "native-base";
import { connect } from "react-redux";

import socketManager from "../../middlewares/socketManager";

import { subscribeCreateRoom } from "../../actions/room";

import Game from "../../containers/Game";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

const CreateRoom = ({ navigation, room, subscribeCreateRoom }) => {
  useEffect(() => {
    subscribeCreateRoom();
  }, []);

  return (
    <Container style={styles.container}>
      <Text>Waiting for player</Text>
      <Spinner color="blue" />
    </Container>
  );
};

const mapStateToProps = state => ({
  room: state.room
});

export default connect(mapStateToProps, {
  subscribeCreateRoom
})(CreateRoom);
