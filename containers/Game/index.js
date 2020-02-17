import React from "react";
import { connect } from "react-redux";
import { YellowBox } from "react-native";
import { requestQuestions, subscribeQuestions } from "../../actions/questions";
import GameView from "../../components/Game/GameView";

YellowBox.ignoreWarnings(["Setting a timer"]);

const Game = ({ questions, requestQuestions, subscribeQuestions }) => {
  subscribeQuestions();

  return <GameView questions={questions} requestQuestions={requestQuestions} />;
};

const mapStateToProps = state => ({
  questions: state.questions
});

export default connect(mapStateToProps, {
  requestQuestions,
  subscribeQuestions
})(Game);
