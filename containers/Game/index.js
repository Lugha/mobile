import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  subscribeQuestions,
  unsubscribeQuestions
} from "../../actions/questions";
import { updateScore } from "../../actions/score";
import { emitGetNextRound, subscribeEndGame } from '../../actions/game';
import { emitLeaveRoom, updateRoom } from '../../actions/room';
import GameView from "../../components/Game/GameView";

const Game = ({
  navigation,
  questions,
  score,
  room,
  game,
  subscribeQuestions,
  unsubscribeQuestions,
  updateScore,
  emitGetNextRound,
  emitLeaveRoom,
  updateRoom,
  subscribeEndGame,
}) => {
  const [round, useRound] = useState(0);

  function goToNextRound(success) {
    let couille = success ? 1 : 0;
    alert("[goToNextRound] success" + couille);
    if (success) {
      updateScore(score + 5);
    }
    emitGetNextRound(room, success);
    useRound(round + 1);
  }

  function quitGame() {
    unsubscribeQuestions();
    updateScore(0);
    emitLeaveRoom(room);
    updateRoom(null);
    navigation.navigate("Menu");
  }

  useEffect(() => {
    subscribeEndGame();
    subscribeQuestions();
    console.log({ room })
    emitGetNextRound(room, true);
  }, []);
          
  return <GameView questions={questions} goToNextRound={goToNextRound} quitGame={quitGame} game={game}/>;
};

const mapStateToProps = state => ({
  questions: state.questions,
  score: state.score,
  room: state.room,
  game: state.game,
});

export default connect(mapStateToProps, {
  subscribeQuestions,
  unsubscribeQuestions,
  updateScore,
  emitGetNextRound,
  emitLeaveRoom,
  updateRoom,
  subscribeEndGame
})(Game);
