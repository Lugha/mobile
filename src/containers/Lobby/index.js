import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  subscribeGame,
  unsubscribeGame,
  emitJoinRoom,
  emitJoinWaitingList,
  resetGame,
  emitLeaveWaitingList
} from "../../actions/game";

import Lobby from "../../components/Lobby";

const index = ({
  navigation,
  game,
  emitJoinRoom,
  emitJoinWaitingList,
  resetGame,
  subscribeGame,
  unsubscribeGame
}) => {
  function cancel() {
    emitLeaveWaitingList();
    resetGame();
    unsubscribeGame();
    navigation.replace("Menu");
  }

  useEffect(() => {
    if (!game.room) {
      subscribeGame();
      emitJoinWaitingList();
    } else {
      console.log({ room: game.room });
      emitJoinRoom(game.room);
      navigation.replace("GameIntro");
    }
  }, [game.room]);

  return <Lobby cancel={cancel} />;
};

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps, {
  emitJoinRoom,
  emitJoinWaitingList,
  resetGame,
  subscribeGame,
  unsubscribeGame
})(index);
