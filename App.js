import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'native-base';
import io from 'socket.io-client';


export default class App extends Component {
  componentDidMount() {
    const socket = io("http://192.168.0.30:5001/");
  }
  
  render () {
    return (
    <View style={styles.container}>
      <Button
        light
      >
        <Text> Connect </Text>
      </Button>
    </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
