import React from "react";

import GameIntro from "../../../components/Game/Intro";

const index = ({ navigation }) => {
  function goToGameStageIntro() {
    navigation.replace("GameStageIntro");
  }

  return <GameIntro goToGameStageIntro={goToGameStageIntro} />;
};

export default index;
