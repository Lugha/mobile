import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import {
  emitUpdateStage,
  subscribeGame,
  unsubscribeGame,
  resetGame,
  emitLeaveRoom
} from "../../actions/game";

import Game from "../../components/Game";

const GameBuilder = ({
  navigation,
  game,
  resetGame,
  unsubscribeGame,
  emitUpdateStage,
  emitLeaveRoom
}) => {
  const [submitedAnswer, setSubmitedAnswer] = useState(false);

  function submitStageAnswer(key) {
    emitUpdateStage({ room: game.room, choice: key });
    setSubmitedAnswer(true);
  }

  function quitGame() {
    unsubscribeGame();
    emitLeaveRoom(game.room);
    emitUpdateStage({ room: game.room, leave: true });
    resetGame();
    navigation.navigate("Menu");
  }

  useEffect(() => {
    if (submitedAnswer) setSubmitedAnswer(false);
  }, [game.stageData]);

  return (
    <Game
      submitedAnswer={submitedAnswer}
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
  resetGame,
  subscribeGame,
  unsubscribeGame
})(GameBuilder);
