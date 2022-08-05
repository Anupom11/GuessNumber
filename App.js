import React from 'react';
import { StyleSheet, View } from 'react-native';

import StartGameScreen from './Screens/StartScreen';

export default function App() {
  return (
    <View style={styles.rootScreen}>
      <StartGameScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootScreen: {
    flex: 1,
    backgroundColor: '#ddb52f'
  }
});