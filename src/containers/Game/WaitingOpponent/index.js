import React, { useEffect } from "react";
import { connect } from "react-redux";

import WaitingOpponent from "../../../components/WaitingOpponent";

const index = ({ navigation, game }) => {
  useEffect(() => {
    if (game.waitingNextStage > 1) {
      navigation.navigate("GameStageIntro");
    }
  }, [game.stageData]);

  useEffect(() => {
    if (game.waitingNextStage > 1) {
      navigation.navigate("GameRoundResume");
    }
  }, [game.stageFailed]);

  return <WaitingOpponent />;
};

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps)(index);
