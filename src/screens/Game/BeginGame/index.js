import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import {
  emitUpdateGame,
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
  emitUpdateGame,
  emitLeaveRoom
}) => {

  function submitStageAnswer(key) {
    if (!game.waitingNextStage)
      navigation.navigate("WaitingOpponent", {
      quitGame,
      game
    });
    emitUpdateGame({ room: game.room, choice: key });
    // if (game.stageFailed) {
    //   navigation.navigate("EndRound", {
    //     quitGame,
    //     game
    //   });
    // }
  }

  function quitGame() {
    unsubscribeGame();
    emitLeaveRoom(game.room);
    emitUpdateGame({ room: game.room, leave: true });
    resetGame();
    navigation.navigate("Home");
  }

  // const [timerFinish, setTimerFinish] = useState(false)

  useEffect(() => {
    if (game.stageFailed && game.waitingNextStage === 2) {
      navigation.navigate("EndRound", {
        submitStageAnswer,
        quitGame,
        game,
      });
    } else if (!game.waitingNextStage){
      navigation.navigate("BeginRound", {
        submitStageAnswer,
        quitGame,
        game
      });
    };
  }, [game.stageData, game.stageFailed, game.waitingNextStage]);

  return <></>;
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
})(BeginGame);
