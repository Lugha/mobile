import React from 'react'
import { Text, View } from 'react-native';
import { Button } from 'native-base';

const gameRound = (props) => {
    sentence = props.sentence

    traductions = []
    props.traductions.map(
        (item, key) => traductions.push(<Button success onPress={() => props.handleAnswer(item.success)} title={item} key={key} >
            <Text>
                { item.text }
            </Text>
            </Button>)
    )

    return (
        <React.Fragment>
            <Text>
                {sentence}
            </Text>
            <View>
                {traductions}
            </View>
        </React.Fragment>
    )
}

export default gameRound