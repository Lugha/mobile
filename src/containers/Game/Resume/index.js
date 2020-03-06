import React from "react";
import { connect } from "react-redux";

import {
  emitUpdateGame,
  unsubscribeGame,
  emitLeaveRoom,
  resetGame,
  subscribeGame
} from "../../../actions/game";

import GameEnd from "../../../components/Game/Resume";

const index = ({
  navigation,
  game,
  resetGame,
  unsubscribeGame,
  emitUpdateGame,
  emitLeaveRoom
}) => {
  function quitGame() {
    unsubscribeGame();
    emitLeaveRoom(game.room);
    emitUpdateGame({ room: game.room, leave: true });
    resetGame();
    navigation.replace("Menu");
  }
  return <GameEnd quitGame={quitGame} />;
};

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps, {
  emitUpdateGame,
  emitLeaveRoom,
  resetGame,
  subscribeGame,
  unsubscribeGame
})(index);
