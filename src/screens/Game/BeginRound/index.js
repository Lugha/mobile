import React, { useEffect } from "react";

const BeginRound = ({ route, navigation }) => {
  useEffect(() => {
    navigation.navigate("BeginStage", route.params);
  });
  return <></>;
};

export default BeginRound;
