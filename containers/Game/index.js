import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import socketIOClient from "socket.io-client";
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings(["Setting a timer"]);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center"
  }
});

const Game = ({ questions }) => {
  console.log(questions);
  return (
    <View style={styles.view}>
      <Text>Game Container</Text>
    </View>
  );
};

const mapStateToProps = state => ({
  questions: state.questions
});

export default connect(mapStateToProps)(Game);
