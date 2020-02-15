import React from 'react'
import { Text, View } from 'react-native';
import { Button } from 'native-base';

const gameRound = (props) => {

    return (
        <React.Fragment>
            <Button onPress={() => props.startNextRound() }>
                <Text>
                    NextRound
                </Text>
            </Button>
        </React.Fragment>
    )
}

export default gameRound