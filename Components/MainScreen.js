import React, {Component} from 'react';
import {StyleSheet, Platform} from 'react-native';
import {Icon} from 'native-base';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeTab from './Screen/HomeTab';
import SearchTab from './Screen/SearchTab';
import AddMediaTab from './Screen/AddMediaTab';
import LikesTab from './Screen/LikesTab';
import ProfileTab from './Screen/ProfileTab';

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeTab,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-home" style={{color: tintColor}} />
        ),
      },
    },
    Search: {
      screen: SearchTab,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-search" style={{color: tintColor}} />
        ),
      },
    },
    AddMedia: {
      screen: AddMediaTab,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-add-circle" style={{color: tintColor}} />
        ),
      },
    },
    Likes: {
      screen: LikesTab,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-heart" style={{color: tintColor}} />
        ),
      },
    },
    Profile: {
      screen: ProfileTab,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-person" style={{color: tintColor}} />
        ),
      },
    },
  },
  {
    animationEnable: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {
            backgroundColor: '#1C2833',
          },
        }),
      },
      activeTintColor: '#fff',
      inactiveTintColor: 'grey',
      showLabel: false,
      showIcon: true,
    },
  },
);

// Khởi tạo TabNavigator để bọc lấy AppTabNavigator, chuyền <TabNavigator />
const TabNavigator = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return <TabNavigator />;
  }
}


