import React from "react";
import ScoreView from "../../components/Game/ScoreView";
import { connect } from "react-redux";

const Score = ({ score = 0 }) => {
  return <ScoreView score={score} />;
};

const mapStateToProps = state => ({ score: state.score });

export default connect(mapStateToProps)(Score);
