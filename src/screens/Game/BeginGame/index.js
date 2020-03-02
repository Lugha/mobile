import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  emitUpdateStage,
  unsubscribeGame,
  emitLeaveRoom,
  resetGame,
  subscribeGame
} from "../../../actions/game";

const BeginGame = ({
  navigation,
  game,
  resetGame,
  unsubscribeGame,
  emitUpdateStage,
  emitLeaveRoom
}) => {
  function submitStageAnswer(key) {
    emitUpdateStage({ room: game.room, choice: key });
    if (game.stageFailed) {
      navigation.navigate("EndRound", {
        quitGame,
        game
      });
    }
    navigation.navigate("WaitingOpponent", {
      quitGame,
      game
    });
  }

  function quitGame() {
    unsubscribeGame();
    emitLeaveRoom(game.room);
    emitUpdateStage({ room: game.room, leave: true });
    resetGame();
    navigation.navigate("Home");
  }

  useEffect(() => {
    navigation.navigate("BeginRound", {
      submitStageAnswer,
      quitGame,
      game
    });
  });

  return <></>;
};

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps, {
  emitUpdateStage,
  emitLeaveRoom,
  resetGame,
  subscribeGame,
  unsubscribeGame
})(BeginGame);
