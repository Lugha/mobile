import React, { useEffect } from "react";
import { connect } from "react-redux";
import { YellowBox } from "react-native";
import {
  requestQuestions,
  subscribeQuestions,
  unsubscribeQuestions
} from "../../actions/questions";
import GameView from "../../components/Game/GameView";

YellowBox.ignoreWarnings(["Setting a timer"]);

const Game = ({
  questions,
  requestQuestions,
  subscribeQuestions,
  unsubscribeQuestions
}) => {
  useEffect(() => {
    subscribeQuestions();

    return () => {
      unsubscribeQuestions();
    };
  }, []);

  return <GameView questions={questions} requestQuestions={requestQuestions} />;
};

const mapStateToProps = state => ({
  questions: state.questions
});

export default connect(mapStateToProps, {
  requestQuestions,
  subscribeQuestions,
  unsubscribeQuestions
})(Game);
