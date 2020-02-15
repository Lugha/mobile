import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button } from "native-base";
import socketIOClient from "socket.io-client";

import config from "./config";

console.log({ config });

export default class App extends Component {
  state = {
    input: null,
    sentencesAndtraductions: [],
    selectedSentencesAndtraductions: 0,
    finished: false
  };

  componentDidMount() {
    this.socket = socketIOClient(`http://192.168.99.100:8080/`, {
      forceBase64: 1
    });
    this.socket.on("receiveSentence", data => {
      data = JSON.parse(data);
      this.setState({ sentencesAndtraductions: data });
    });
  }

  sendMessage = () => {
    this.socket.emit("sendSentence", this.state.input);
  };

  sendTraduction = traduction => {
    if (
      this.state.selectedSentencesAndtraductions ===
      this.state.sentencesAndtraductions.length - 1
    ) {
      this.setState({ finished: true });
      return;
    }
    this.setState({
      selectedSentencesAndtraductions:
        this.state.selectedSentencesAndtraductions + 1
    });
  };

  handleChange = input => {
    this.setState({ input });
  };

  render() {
    let sentence = <Text>LOADING sentence ...</Text>;
    let traductions = <Text>LOADING traductions ...</Text>;

    if (
      this.state.sentencesAndtraductions[
        this.state.selectedSentencesAndtraductions
      ] &&
      !this.state.finished
    ) {
      sentence = this.state.sentencesAndtraductions[
        this.state.selectedSentencesAndtraductions
      ].sentence;
      traductions = [];
      this.state.sentencesAndtraductions[
        this.state.selectedSentencesAndtraductions
      ].traductions.map((item, key) =>
        traductions.push(
          <Button
            success
            onPress={() => this.sendTraduction(item)}
            title={item}
            key={key}
          >
            <Text>{item}</Text>
          </Button>
        )
      );
    } else if (this.state.finished) {
      sentence = <Text />;
      traductions = <Text>FINISH !</Text>;
    }

    return (
      <View style={styles.container}>
        <Text>{sentence}</Text>
        <View>{traductions}</View>
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
  },
  input: {
    height: 30,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1
  }
});
