import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'native-base';
import socketIOClient from 'socket.io-client';

import config from '../../config.json';

class GameBuilder extends Component {
    state = {
        input: null,
        gameRoundData: null,
        finished: false,
      }
    
    componentDidMount() {
        this.socket = socketIOClient(`http://192.168.0.30:5001/`, { "forceBase64": 1 });
        this.socket.on("getRandomRound", data => {
            data = JSON.parse(data);
            this.setState({gameRoundData: data});
        });
        this.getNewGameRoundData();
    }
    getNewGameRoundData = () => this.socket.emit("getRandomRound");

    handleAnswer = success => success ? this.getNewGameRoundData() : this.setState({finished: true});
    replay = () => {
        this.getNewGameRoundData();
        this.setState({ finished: false });
    }

    render () {
        let sentence = <Text>LOADING sentence ...</Text>
        let traductions = <Text>LOADING traductions ...</Text>
        let replay = null
        
        if (this.state.gameRoundData && !this.state.finished) {
            sentence = this.state.gameRoundData.sentence
            traductions = []
            this.state.gameRoundData.traductions.map(
                (item, key) => traductions.push(<Button success onPress={() => this.handleAnswer(item.success)} title={item} key={key} >
                    <Text>
                         { item.text }
                    </Text>
                    </Button>)
            )
        } else if (this.state.finished){
            sentence = <Text></Text>
            traductions = <Text>Finish !</Text>
            replay = <Button onPress={() => this.replay() }>
                <Text>
                    Replay
                </Text>
            </Button>
        }

        return (
            <View style={styles.container}>
                <Text>
                    {sentence}
                </Text>
                <View>
                    {traductions}
                </View>
                <View>
                    {replay}
                </View>
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
    input: {
      height: 30,
      width: "80%",
      borderColor: 'gray',
      borderWidth: 1
    }
});

export default GameBuilder;