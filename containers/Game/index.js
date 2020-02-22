import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  subscribeQuestions,
  unsubscribeQuestions
} from "../../actions/questions";
import { updateScore } from "../../actions/score";
import { emitGetNextRound } from '../../actions/game';
import { emitLeaveRoom, updateRoom } from '../../actions/room';
import GameView from "../../components/Game/GameView";

const Game = ({
  navigation,
  questions,
  score,
  room,
  subscribeQuestions,
  unsubscribeQuestions,
  updateScore,
  emitGetNextRound,
  emitLeaveRoom,
  updateRoom
}) => {
  const [round, useRound] = useState(0);

  function goToNextRound(success) {
    console.log("goToNextRound");
    if (success) {
      updateScore(score + 5);
    }
    emitGetNextRound(room);
    useRound(round + 1);
  }

  function quitGame() {
    unsubscribeQuestions();
    updateScore(0);
    emitLeaveRoom(room);
    updateRoom(null);
    navigation.navigate('Menu');
  }

  useEffect(() => {
    subscribeQuestions();
    console.log({ room })
    emitGetNextRound(room);
  }, []);

  return <GameView questions={questions} goToNextRound={goToNextRound} quitGame={quitGame} />;
};

const mapStateToProps = state => ({
  questions: state.questions,
  score: state.score,
  room: state.room
});

export default connect(mapStateToProps, {
  subscribeQuestions,
  unsubscribeQuestions,
  updateScore,
  emitGetNextRound,
  emitLeaveRoom,
  updateRoom
})(Game);
