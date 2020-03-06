import React from "react";

import StageIntro from "../../../../../components/Game/Round/Stage/Intro";

const index = ({ navigation, game, emitUpdateGame }) => {
  function goToStage() {
    navigation.replace("GameStage");
  }

  return <StageIntro goToStage={goToStage} countdown={3} />;
};

export default index;
