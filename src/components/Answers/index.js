import React from "react";

import { StyleSheet } from "react-native";
import Answer from "./Answer";
import { Container, Content } from "native-base";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey"
  }
});

function Answers({ translations, submitStageAnswer }) {
  return (
    <Container style={styles.view}>
      <Content>
        {translations &&
          translations.map((translation, index) => (
            <Answer
              key={index}
              response={index}
              translation={translation}
              submitStageAnswer={submitStageAnswer}
            />
          ))}
      </Content>
    </Container>
  );
}

export default Answers;
