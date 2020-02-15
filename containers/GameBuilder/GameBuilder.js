import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import socketIOClient from 'socket.io-client';

import GameRound from '../../components/Game/GameRound/GameRound'
import GameEndRound from '../../components/Game/GameEndRound/GameEndRound'

class GameBuilder extends Component {
    
    state = {
        gameRoundTotal: 5, 
        gameRoundData: null,
        finishedGameRound: false,
        currentGameRound: 0,
        finishedGame: false,
    }

    componentDidMount() {
        this.socket = socketIOClient(`http://192.168.0.30:5001/`, { "forceBase64": 1 });
        this.socket.on("getRandomRound", data => {
            data = JSON.parse(data);
            this.setState({gameRoundData: data, currentGameRound: 1});
        });
        this.getNewGameRoundData();
    }

    handleAnswer = success => {
        if (!success) {
            (this.state.currentGameRound == this.state.gameRoundTotal) ? this.setState({finishedGame: true}) : null;
            this.setState({finishedGameRound: true});
            return;
        }
        this.getNewGameRoundData();
    }
    
    startGameRound = () => {
        this.getNewGameRoundData();
        this.setState({
            finishedGameRound: false, 
            gameRoundData: null, 
            currentGameRound: this.state.currentGameRound + 1});
    }

    render () {
        gameEvent = <Text>Loading ...</Text>;

        if (this.state.gameRoundData && !this.state.finishedGameRound) {
            gameEvent = <GameRound 
                sentence={this.state.gameRoundData.sentence}
                traductions={this.state.gameRoundData.traductions}
                handleAnswer={this.handleAnswer}
                currentGameRound={this.state.currentGameRound} />;
        } else if (this.state.finishedGame) {
            gameEvent = <GameEnd />;
        } else if (this.state.finishedGameRound) {
            gameEvent = <GameEndRound startNextRound={this.startGameRound} explaination="c'est une explication" />;
        }

        return (
            <View style={styles.container}>
                {gameEvent}
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default GameBuilder;