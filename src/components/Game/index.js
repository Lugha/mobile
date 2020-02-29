import React from "react";
import End from "./Views/End";
import WaitBefore from "./Views/WaitBefore";

const Game = ({ submitedAnswer, submitStageAnswer, quitGame, game }) => {
  return game.active ? (
    <WaitBefore
      submitedAnswer={submitedAnswer}
      submitStageAnswer={submitStageAnswer}
      game={game}
      quitGame={quitGame}
    />
  ) : (
    <End quitGame={quitGame} />
  );
};

export default Game;
