import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'native-base';
import socketIOClient from 'socket.io-client';

import config from '../../config.json';

console.log('couille')

class GameBuilder extends Component {
    state = {
        input: null,
        roundData: [],
        // roundIndex: 0,
        finished: false,
      }
    
    componentDidMount() {
        this.socket = socketIOClient(`http://127.0.0.1:5001/`, { "forceBase64": 1 });
        this.socket.on("getRandomRound", data => {
            data = JSON.parse(data);
            this.setState({roundData: data});
        });
    }

    getNewRoundData = () => {
        this.socket.on("getRandomRound", data => {
            data = JSON.parse(data);
            this.setState({roundData: data});
        });
    }
    // sendTraduction = () => {
    //     if (this.state.roundIndex === this.state.testData.length - 1) {
    //         this.setState({ finished: true })
    //         return
    //     }
    //     this.setState({roundIndex: this.state.roundIndex + 1})
    // }



    render () {
        let sentence = <Text>LOADING sentence ...</Text>
        let traductions = <Text>LOADING traductions ...</Text>
        
        if (this.state.roundData && !this.state.finished) {
            sentence = this.state.roundData.sentence
            traductions = []
            this.state.roundData.traductions.map(
                (item, key) => traductions.push(<Button success onPress={() => this.getNewRoundData()} title={item} key={key} >
                    <Text>
                        {item}
                    </Text>
                    </Button>)
            )
        } 
        // else if (this.state.finished) {
        //     sentence = <Text />
        //     traductions = <Text>FINISH !</Text>
        // }

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