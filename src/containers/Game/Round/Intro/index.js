import React, { useEffect } from "react";
import { connect } from "react-redux";

import RoundIntro from "../../../../components/Game/Round/Intro";

const index = ({ navigation, game }) => {
  useEffect(() => {
    setTimeout(() => navigation.replace("GameStageIntro"), 3000);
  });

  return <RoundIntro round={game.actualRound} />;
};

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps)(index);
