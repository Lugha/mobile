import React, { useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { Container, Spinner, Button } from "native-base";
import { connect } from "react-redux";

// import socketManager from "../../middlewares/socketManager";

// import {
  // subscribeCreateRoom,
  // unsubscribeCreateRoom,
  // emitCreateRoom,
  // emitJoinRoom,
  // emitCancelCreateRoom
// } from "../../actions/room";

import {
  subscribeGame,
  unsubscribeGame,
  emitJoinRoom,
  emitJoinWaitingList,
  cleanGame,
  emitLeaveWaitingList,
} from "../../actions/game"

// import Game from "../../containers/Game";

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
  game,
  // room,
  // subscribeCreateRoom,
  // unsubscribeCreateRoom,
  // emitCreateRoom,
  emitJoinRoom,
  emitJoinWaitingList,
  cleanGame,
  subscribeGame,
  unsubscribeGame,

  // emitCancelCreateRoom
}) => {
  function cancel() {
    cleanGame();
    unsubscribeGame();
    // emitCancelCreateRoom();
    // unsubscribeCreateRoom();
    navigation.navigate("Menu");
  }

  useEffect(() => {
    if (!game.room) {
      subscribeGame();
      emitJoinWaitingList();
      // subscribeCreateRoom();
      // emitCreateRoom();
    } else {
      emitLeaveWaitingList();
      emitJoinRoom(game.room);
      // unsubscribeCreateRoom();
      navigation.navigate("Game");
    }
  }, [game.room]);

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
  game: state.game
});

export default connect(mapStateToProps, {
  // subscribeCreateRoom,
  // unsubscribeCreateRoom,
  // emitCreateRoom,
  emitJoinRoom,
  emitJoinWaitingList,
  cleanGame,
  subscribeGame,
  unsubscribeGame,
  // emitCancelCreateRoom
})(CreateRoom);
