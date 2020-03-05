import React, { useEffect } from "react";
import { Text } from "react-native";

import styles from "./style";

const index = ({ goToGameStageIntro }) => {
  useEffect(() => {
    setTimeout(() => goToGameStageIntro(), 5000);
  });

  return <Text style={styles.title}>La partie va commencer</Text>;
};

export default index;
