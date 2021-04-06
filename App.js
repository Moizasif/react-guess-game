import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import SmartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);


  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }
  
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  const gameOverHandler = (numOfRounds) => {
     setGuessRounds(numOfRounds);
  }
  let content = <SmartGameScreen onStartGame={startGameHandler} />;
  //Check if user selected the Number
  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  } else if (guessRounds > 0){
     content = <GameOverScreen roundNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler}/>
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});
