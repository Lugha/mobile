import React from "react";
import GameStageView from "./Views/GameStageView"
import GameEndView from "./Views/GameEndView";

const Game = ({ submitStageAnswer, quitGame, game }) => {
  return game.active 
    ? <GameStageView submitStageAnswer={submitStageAnswer} game={game} quitGame={quitGame}/>
    : <GameEndView quitGame={quitGame} />;
};

export default Game;
