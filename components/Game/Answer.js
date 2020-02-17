import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight
} from "react-native";

// import { Button } from "native-base";

const styles = StyleSheet.create({
  answer: {
    margin: 30
  }
});

function Answer({ requestQuestions, translation }) {
  return (
    <View styles={styles.answer}>
      <Button title={translation.text} onPress={requestQuestions} />
    </View>
  );
}

export default Answer;
