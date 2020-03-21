import React, { useEffect } from "react";
import { connect } from "react-redux";

import { emitUpdateGame } from "../../../../actions/game";

import Stage from "../../../../components/Game/Round/Stage";

const index = ({ navigation, game, emitUpdateGame }) => {
  function submitStageAnswer(key) {
    emitUpdateGame({ room: game.room, choice: key });
    if (!game.waitingNextStage) {
      navigation.replace("WaitingOpponent");
    } else if (game.stageFailed) {
      navigation.replace("GameRoundResume");
    } else {
      navigation.replace("GameStageIntro");
    }
  }

  return (
    <Stage
      submitStageAnswer={submitStageAnswer}
      countdown={10}
      round={game.actualRound}
      stageData={game.stageData}
      stageType={game.stageType}
    />
  );
};

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps, {
  emitUpdateGame
})(index);
