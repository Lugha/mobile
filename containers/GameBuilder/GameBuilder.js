import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import socketIOClient from "socket.io-client";

import GameRound from "../../components/Game/GameRound/GameRound";
import GameEndRound from "../../components/Game/GameEndRound/GameEndRound";

class GameBuilder extends Component {
  state = {
    gameRoundData: null,
    finished: false
  };

  componentDidMount() {
    this.socket = socketIOClient(`http://localhost:8080/`, {
      forceBase64: 1
    });
    this.socket.on("getRandomRound", data => {
      data = JSON.parse(data);
      this.setState({ gameRoundData: data });
    });
    this.getNewGameRoundData();
  }
  getNewGameRoundData = () => this.socket.emit("getRandomRound");

  handleAnswer = success =>
    success ? this.getNewGameRoundData() : this.setState({ finished: true });

  replayGameRound = () => {
    this.getNewGameRoundData();
    this.setState({ finished: false, gameRoundData: null });
  };

  render() {
    gameRound = null;
    gameEndRound = null;
    loading = null;

    if (this.state.gameRoundData && !this.state.finished) {
      gameRound = (
        <GameRound
          sentence={this.state.gameRoundData.sentence}
          traductions={this.state.gameRoundData.traductions}
          handleAnswer={this.handleAnswer}
        />
      );
    } else if (this.state.finished) {
      gameEndRound = <GameEndRound startNextRound={this.replayGameRound} />;
    } else {
      loading = <Text>Loading ...</Text>;
    }

    return (
      <View style={styles.container}>
        {gameRound}
        {gameEndRound}
        {loading}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default GameBuilder;
