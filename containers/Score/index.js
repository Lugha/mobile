import React from "react";
import { Container, Content, Text } from "native-base";
import { StyleSheet } from "react-native";
import ScoreView from "../../components/Game/ScoreView";

const Score = ({ score = 0 }) => {
  return <ScoreView score={score} />;
};

export default Score;
