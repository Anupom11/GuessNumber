import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import StartGameScreen from './Screens/StartScreen';
import GameScreen from './Screens/GameScreen';
import GameOver from './Screens/GameOver';

export default function App() {  

  const [useNumber, setUseNumber] = useState();
  const [gameOver, setGameOver]   = useState(false);

  function pickNumberHandler(pickNumber) {
    setUseNumber(pickNumber);
  }
  
  function handleGameOverHandler(gameOverFlag) {
    setGameOver(gameOverFlag);
  }

  let screen = <StartGameScreen onPickNumber={pickNumberHandler}/>;

  if(useNumber && !gameOver) {
    screen = <GameScreen userInputNo={useNumber} gameOverFlag={handleGameOverHandler}/>
  }
  else if(gameOver) {
    screen = <GameOver/>
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/dices.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>

        {/* <StartGameScreen/> */}

        {screen}
      
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootScreen: {
    flex: 1,
    backgroundColor: '#ddb52f'
  },
  backgroundImage: {
    opacity: 0.15,
  }
});