import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'native-base';
import io from 'socket.io-client';


export default class App extends Component {
  state = {
    input: null,
    sentence: null,
    traductions: []
  }

  componentDidMount() {
    this.socket = io("http://192.168.0.30:5001/", { "forceBase64": 1 });

    this.socket.on("receiveSentence", data => {
      data = JSON.parse(data);
      this.setState({ sentence: data.sentence, traductions: data.traductions });
    }
    );
  }

  sendMessage = () => { this.socket.emit("sendSentence", this.state.input) }
  handleChange = (input) => { this.setState({ input }) }

  render() {
    console.log(this.state.traductions)
    return (
      <View style={styles.container}>
        <Text>
          {this.state.sentence}
        </Text>
        <View>
          {this.state.traductions.map(
            (item, key) => <Button success title={item} onPress={() => console.log("id:", key)} key={key} >
              <Text>
                {item}
              </Text>
            </Button>
          )}
        </View>
      </View>
    )
  };
}

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
