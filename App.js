import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from './Components/MainScreen';

const RootStack = createStackNavigator({
  Main: {
    screen: MainScreen,
  },
});

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}
