import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import WaitingOpponent from "../../../components/WaitingOpponent";

const index = ({ navigation, game }) => {
  const [render, setRender] = useState(false);

  console.log({ render });

  useEffect(() => {
    if (render) {
      if (game.actualStage === 1) {
        navigation.replace("GameRoundResume");
      } else {
        navigation.replace("GameStageIntro");
      }
    } else {
      setRender(true);
    }
  }, [game.actualRound, game.actualStage]);

  return <WaitingOpponent />;
};

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps)(index);
