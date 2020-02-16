import React, { Component, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import socketIOClient from "socket.io-client";
import { YellowBox } from "react-native";
import { Button } from "native-base";
import { requestQuestions, subscribeQuestions } from "../../actions/question";

YellowBox.ignoreWarnings(["Setting a timer"]);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center"
  }
});

const Game = ({ questions, requestQuestions, subscribeQuestions }) => {
  subscribeQuestions();

  console.log("question", questions);
  return (
    <View style={styles.view}>
      <Button
        onPress={() => {
          requestQuestions();
        }}
      >
        <Text>Game Container</Text>
      </Button>
    </View>
  );
};

const mapStateToProps = state => ({
  questions: state.questions
});

export default connect(mapStateToProps, {
  requestQuestions,
  subscribeQuestions
})(Game);
