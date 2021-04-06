import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import SmartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();


  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = <SmartGameScreen onStartGame={startGameHandler} />;
  //Check if user selected the Number
  if (userNumber) {
    content = <GameScreen userChoice={userNumber}/>
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
