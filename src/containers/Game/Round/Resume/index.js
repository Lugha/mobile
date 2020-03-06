import React from "react";
import { connect } from "react-redux";

import RoundEnd from "../../../../components/Game/Round/Resume";

const index = ({ navigation, game }) => {
  function endRoundOrGame() {
    if (game.actualRound === game.roundTotal) {
      navigation.replace("GameResume");
    } else {
      navigation.replace("GameRoundIntro");
    }
  }

  return <RoundEnd endRoundOrGame={endRoundOrGame} countdown={5} />;
};

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps)(index);
