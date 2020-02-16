import React from 'react'
import { Text, View } from 'react-native';
import { Button } from 'native-base';

const gameRound = (props) => {

    return (
        <React.Fragment>
            <Text>
                La réponse était:
                { props.explaination }
            </Text>
            <Button onPress={ () => props.startNextRound() }>
                <Text>
                    J'ai compris
                </Text>
            </Button>
        </React.Fragment>
    )
}

export default gameRound