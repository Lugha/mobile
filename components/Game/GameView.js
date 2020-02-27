import React from "react";
import { StyleSheet, Text } from "react-native";
import Sentence from "./Sentence";
import AnswersView from "./AnswersView";
import { Container, Button } from "native-base";
import Score from "../../containers/Score";
import GameEndView from "./GameEndView";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  },
  buttonQuit: {
    marginLeft: 'auto',
    marginRight: 20,
    marginTop: 20,
    width: 100,
  },
});

const GameView = ({ goToNextRound, quitGame, game }) => {
  return (game.active
    ? <Container style={styles.container}>
        <Score />
        <Button
          style={styles.buttonQuit}
          block
          rounded
          onPress={quitGame}>
          <Text>Quitter</Text>
        </Button>
        <Sentence sentence={game.stageData.sentence} />
        <AnswersView
          goToNextRound={goToNextRound}
          translations={game.stageData.traductions}
          quitGame={quitGame}/>
      </Container>
    : <GameEndView quitGame={quitGame}/>
  );
};

export default GameView;
