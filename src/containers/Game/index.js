import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  emitUpdateStage,
  subscribeGame,
  unsubscribeGame,
  cleanGame,
  emitLeaveRoom
} from "../../actions/game";

import Game from "../../components/Game/Game";

const GameBuilder = ({
  navigation,
  game,
  cleanGame,
  unsubscribeGame,
  emitUpdateStage,
  emitLeaveRoom
}) => {

  function submitStageAnswer(key) {
    emitUpdateStage(game.room, key);
  }

  function quitGame() {
    unsubscribeGame();
    emitLeaveRoom(game.room);
    cleanGame(),
    navigation.navigate("Menu");
  }

  useEffect(() => {
    console.log(game.room);
  }, []);

  return (
    <Game
      submitStageAnswer={submitStageAnswer}
      quitGame={quitGame}
      game={game}
    />
  );
};

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps, {
  emitUpdateStage,
  emitLeaveRoom,
  cleanGame,
  subscribeGame,
  unsubscribeGame
})(GameBuilder);
