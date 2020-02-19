import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { YellowBox } from "react-native";
import {
  requestQuestions,
  subscribeQuestions,
  unsubscribeQuestions
} from "../../actions/questions";
import GameView from "../../components/Game/GameView";
import { updateScore } from "../../actions/score";

YellowBox.ignoreWarnings(["Setting a timer"]);

const Game = ({
  questions,
  score,
  requestQuestions,
  subscribeQuestions,
  unsubscribeQuestions,
  updateScore
}) => {
  const [round, useRound] = useState(0);

  function goToNextRound(success) {
    if (success) {
      updateScore(score + 5);
    }
    requestQuestions();
    useRound(round + 1);
  }

  useEffect(() => {
    subscribeQuestions();

    return () => {
      unsubscribeQuestions();
    };
  }, []);

  return <GameView questions={questions} goToNextRound={goToNextRound} />;
};

const mapStateToProps = state => ({
  questions: state.questions,
  score: state.score
});

export default connect(mapStateToProps, {
  requestQuestions,
  subscribeQuestions,
  unsubscribeQuestions,
  updateScore
})(Game);
