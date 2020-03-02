import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import { Container, Spinner } from "native-base";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

function WaitingOpponent({ route, navigation }) {
  const [firstEffect, setFirstEffect] = useState(false);
  const { game, quitGame } = route.params;

  useEffect(() => {
    console.log({ gameactibe: game.active });
    if (!game.active) quitGame();
  }, [game.active]);

  useEffect(() => {
    if (firstEffect) {
      navigation.navigate("BeginStage", route.params);
    } else {
      setFirstEffect(true);
    }
  }, [game.stageData]);

  return (
    <Container style={styles.container}>
      <Text>Waiting for the opponent to play</Text>
      <Spinner color="blue" />
    </Container>
  );
}

export default WaitingOpponent;
