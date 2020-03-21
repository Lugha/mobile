import React from "react";

import { Text } from "react-native";
import { Container, Button } from "native-base";

import GameTraductions from "./Traductions";
import GameOperations from "./Operations";

import gameNames from "../../../../utils/gamesNames";

const index = ({
  submitStageAnswer,
  countdown,
  stageData,
  round,
  stageType
}) => {
  if (stageType === gameNames.GAME_TRADUCTIONS) {
    return (
      <GameTraductions
        submitStageAnswer={submitStageAnswer}
        countdown={countdown}
        sentence={stageData.sentence}
        traductions={stageData.traductions}
        round={round}
      />
    );
  } else if (stageType === gameNames.GAME_OPERATIONS) {
    return (
      <GameOperations
        submitStageAnswer={submitStageAnswer}
        countdown={countdown}
        expression={stageData.expression}
        response={stageData.response}
        round={round}
      />
    );
  }
};

export default index;
