import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Container, Button } from "native-base";
import { useRoute } from "@react-navigation/native";

import Stage from "../Stage";

import CountdownCircle from "react-native-countdown-circle";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  }
});

const BeginStage = ({ route, navigation }) => {
  const countdown = 3;

  console.log(route.params);

  return (
    <Container style={styles.container}>
      <Text>Le prochain jeu va démarrer</Text>
      <CountdownCircle
        seconds={countdown}
        radius={30}
        borderWidth={8}
        color="#ff003f"
        bgColor="#fff"
        textStyle={{ fontSize: 20 }}
        onTimeElapsed={() => navigation.navigate("Stage", route.params)}
      />
    </Container>
  );
};

export default BeginStage;
