import React, {Component} from 'react';
import {Text, View, YellowBox} from 'react-native';
import StackRoute from './src/navigation/StackRoute';
import Game from './src/screens/Game';
import GameOver from './src/screens/GameOver';

import Splash from './src/screens/Splash';
import StartNow from './src/screens/StartNow';
console.disableYellowBox = true;

export class App extends Component {
  render() {
    return <GameOver />;
  }
}

export default App;
