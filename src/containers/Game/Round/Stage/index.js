import React, { Fragment } from "react";
import { connect } from "react-redux";

import { emitUpdateGame } from "../../../../actions/game";

import Stage from "../../../../components/Game/Round/Stage";

const index = ({ navigation, game, emitUpdateGame }) => {
  function submitStageAnswer(key) {
    emitUpdateGame({ room: game.room, choice: key });
    if (!game.waitingNextStage) {
      navigation.navigate("WaitingOpponent");
    } else {
      if (game.stageFailed) {
        navigation.navigate("GameRoundResume");
      } else {
        navigation.navigate("GameStageIntro");
      }
    }
  }

  return (
    <Stage
      submitStageAnswer={submitStageAnswer}
      countdown={3}
      round={Fragment.actualRound}
      sentence={game.stageData.sentence}
      traductions={game.stageData.traductions}
    />
  );
};

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps, {
  emitUpdateGame
})(index);
