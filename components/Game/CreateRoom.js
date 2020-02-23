import React, { useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { Container, Content, Spinner, Button } from "native-base";
import { connect } from "react-redux";

import socketManager from "../../middlewares/socketManager";

import {
  subscribeCreateRoom,
  unsubscribeCreateRoom,
  emitCreateRoom,
  emitJoinRoom,
  emitCancelCreateRoom
} from "../../actions/room";

import Game from "../../containers/Game";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonCancel: {
    padding: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%'
  }
});

const CreateRoom = ({
  navigation,
  room,
  subscribeCreateRoom,
  unsubscribeCreateRoom,
  emitCreateRoom,
  emitJoinRoom,
  emitCancelCreateRoom
}) => {
  function cancel() {
    emitCancelCreateRoom();
    unsubscribeCreateRoom();
    navigation.navigate("Menu");
  }

  useEffect(() => {
    if (!room) {
      alert('ask for creating room')
      subscribeCreateRoom();
      emitCreateRoom();
    } else {
      alert('we got the room, you can join it')
      emitJoinRoom(room);
      alert('nous avons rejoint la room')
      unsubscribeCreateRoom();
      navigation.navigate("Game");
    }
  }, [room]);

  return (
    <Container style={styles.container}>
      <Text>Waiting for player</Text>
      <Spinner color="blue" />
      <Button style={styles.buttonCancel} block rounded onPress={cancel}>
        <Text>Annuler</Text>
      </Button>
    </Container>
  );
};

const mapStateToProps = state => ({
  room: state.room
});

export default connect(mapStateToProps, {
  subscribeCreateRoom,
  unsubscribeCreateRoom,
  emitCreateRoom,
  emitJoinRoom,
  emitCancelCreateRoom
})(CreateRoom);
