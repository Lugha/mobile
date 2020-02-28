import React, { useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { Container, Spinner, Button } from "native-base";
import { connect } from "react-redux";

import {
  subscribeGame,
  unsubscribeGame,
  emitJoinRoom,
  emitJoinWaitingList,
  cleanGame,
  emitLeaveWaitingList
} from "../../actions/game";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonCancel: {
    padding: 20,
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%"
  }
});

const GameSetup = ({
  navigation,
  game,
  emitJoinRoom,
  emitJoinWaitingList,
  cleanGame,
  subscribeGame,
  unsubscribeGame
}) => {
  function cancel() {
    emitLeaveWaitingList();
    cleanGame();
    unsubscribeGame();
    navigation.navigate("Menu");
  }

  useEffect(() => {
    if (!game.room) {
      subscribeGame();
      emitJoinWaitingList();
    } else {
      emitJoinRoom(game.room);
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
  emitJoinRoom,
  emitJoinWaitingList,
  cleanGame,
  subscribeGame,
  unsubscribeGame
})(GameSetup);
