import React from "react";
import { Text, View } from "react-native";
import { Button } from "native-base";

const gameRound = props => {
  return (
    <React.Fragment>
      <Text>{props.sentence}</Text>
      <View>
        {props.traductions.map((item, key) => (
          <Button
            success
            onPress={() => props.handleAnswer(item.success)}
            title={item}
            key={key}
          >
            <Text>{item.text}</Text>
          </Button>
        ))}
      </View>
      <Text>Round: {props.currentGameRound}</Text>
    </React.Fragment>
  );
};

export default gameRound;
