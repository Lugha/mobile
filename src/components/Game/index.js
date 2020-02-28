import React from "react";
import GameStage from "./Views/GameStage";
import GameEnd from "./Views/GameEnd";

const Game = ({ submitedAnswer, submitStageAnswer, quitGame, game }) => {
  return game.active 
    ? <GameStage
      submitedAnswer={submitedAnswer}
      submitStageAnswer={submitStageAnswer}
      game={game}
      quitGame={quitGame}
      />
    : <GameEnd quitGame={quitGame} />
};

export default Game;
