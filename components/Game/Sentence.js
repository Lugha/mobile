import React from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sentence: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

const Sentence = ({ sentence }) => {
  return (
    <View style={styles.sentence}>
      <Text>{sentence}</Text>
    </View>
  );
};

export default Sentence;
