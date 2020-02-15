import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'native-base';
import socketIOClient from 'socket.io-client';

import config from '../../config.json';

console.log('couille')

class GameBuilder extends Component {
    state = {
        input: null,
        gameRoundData: null,
        finished: false,
      }
    
    getNewRoundData = () => {
        this.socket.emit("getRandomRound");
    }

    componentDidMount() {
        this.socket = socketIOClient(`http://127.0.0.1:5001/`, { "forceBase64": 1 });
        this.socket.on("getRandomRound", data => {
            console.log('yooo', data)
            data = JSON.parse(data);
            console.log('coucou', data)
            this.setState({gameRoundData: data});
            console.log(this.state.gameRoundData)
        });
        getNewRoundData();
    }

    render () {
        let sentence = <Text>LOADING sentence ...</Text>
        let traductions = <Text>LOADING traductions ...</Text>
        
        if (this.state.gameRoundData && !this.state.finished) {
            sentence = this.state.gameRoundData.sentence
            traductions = []
            console.log(this.state.gameRoundData)
            this.state.gameRoundData.traductions.map(
                (item, key) => traductions.push(<Button success onPress={() => this.getNewgameRoundData()} title={item} key={key} >
                    <Text>
                        {item}
                    </Text>
                    </Button>)
            )
        }

        return (
            <View style={styles.container}>
                <Text>
                    {sentence}
                </Text>
                <View>
                    {traductions}
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