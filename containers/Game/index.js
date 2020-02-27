import React, { useEffect } from "react";
import { connect } from "react-redux";
// import {
//   subscribeQuestions,
//   unsubscribeQuestions
// } from "../../actions/questions";
// import { updateScore } from "../../actions/score";
import { emitUpdateStage, subscribeGame, unsubscribeGame, cleanGame, emitLeaveRoom } from '../../actions/game';
// import { emitLeaveRoom, updateRoom, unsubscribeCreateRoom } from '../../actions/room';
import GameView from "../../components/Game/GameView";

const Game = ({
  navigation,
  // questions,
  // score,
  // room,
  game,
  cleanGame,
  unsubscribeGame,
  emitUpdateStage,
  emitLeaveRoom,
  // updateRoom,
  // updateGame,
  // subscribeEndGame,
  // unsubscribeEndGame,
}) => {
  // const [round, useRound] = useState(0);

  function goToNextRound(success) {//submitStageAnswer
    if (success) {
      updateScore(score + 5);
    }
    emitUpdateStage(room, success);
    // useRound(round + 1);
  }

  function quitGame() {
    // unsubscribeQuestions();
    unsubscribeGame();
    emitLeaveRoom(room);
    cleanGame(),
    // updateScore(0);
    navigation.navigate("Menu");
  }

  useEffect(() => {
    // subscribeQuestions();
    console.log(game.room)
    emitUpdateStage(game.room, true);
  }, []);
          
  return <GameView goToNextRound={goToNextRound} quitGame={quitGame} game={game}/>;
};

const mapStateToProps = state => ({
  // questions: state.questions,
  // score: state.score,
  // room: state.room,
  game: state.game,
});

export default connect(mapStateToProps, {
  // subscribeQuestions,
  // unsubscribeQuestions,
  // updateScore,
  emitUpdateStage,
  emitLeaveRoom,
  // updateRoom,
  // updateGame,
  cleanGame,
  subscribeGame,
  unsubscribeGame,
  // unsubscribeCreateRoom,
})(Game);
