import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Button } from 'native-base';
import io from 'socket.io-client';


export default class App extends Component {
  state = {
    input: null,
    sentence: null
  }

  componentDidMount() {
    this.socket = io("http://192.168.0.30:5001/", { "forceBase64" : 1 });

    this.socket.on("receiveSentence", sentence => { this.setState({ sentence }); console.log("sentence: ", this.state.sentence) } );
  }

  sendMessage = () => { console.log("in sendMessage"); this.socket.emit("sendSentence", this.state.input)}
  handleChange = (input) => { this.setState({ input })}


  render () {
    return (
    <View style={styles.container}>
      <Text>
        { this.state.sentence }
      </Text>
      <TextInput
        style={styles.input}
        value={ this.state.input }
        onChangeText={(value) => this.handleChange(value)}
      />
      <Button
        success
        onPress={this.sendMessage}
      >
        <Text> Envoyer </Text>
      </Button>
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
