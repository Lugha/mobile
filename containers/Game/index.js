import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  requestQuestions,
  subscribeQuestions,
  unsubscribeQuestions
} from "../../actions/questions";
import { updateScore } from "../../actions/score";
import { emitEndRound } from '../../actions/game';
import { updateRoom } from '../../actions/room';
import GameView from "../../components/Game/GameView";

const Game = ({
  navigation,
  questions,
  score,
  room,
  requestQuestions,
  subscribeQuestions,
  unsubscribeQuestions,
  updateScore,
  emitEndRound,
  updateRoom
}) => {
  const [round, useRound] = useState(0);

  function goToNextRound(success) {
    if (success) {
      updateScore(score + 5);
    }
    //emitEndRound(room);
    useRound(round + 1);
  }

  function quitGame() {
    unsubscribeQuestions();
    updateScore(0);
    updateRoom(null);
    navigation.navigate('Menu');
  }

  useEffect(() => {
    subscribeQuestions();
  }, []);

  return <GameView questions={questions} goToNextRound={goToNextRound} quitGame={quitGame} />;
};

const mapStateToProps = state => ({
  questions: state.questions,
  score: state.score,
  room: state.room
});

export default connect(mapStateToProps, {
  requestQuestions,
  subscribeQuestions,
  unsubscribeQuestions,
  updateScore,
  emitEndRound,
  updateRoom
})(Game);
