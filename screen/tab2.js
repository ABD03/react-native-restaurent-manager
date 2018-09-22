
import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../style/styles.js';
import { Container,Content, Footer, FooterTab,Icon, 
  Card, CardItem, Thumbnail,Button,Left, Body, Right} from 'native-base';
import Starter from './search';
const AppNavigator = StackNavigator({
  loginscreen: { screen: Starter}
}
);
export default class Tab2 extends Component {
  static navigationOptions = {
    tabBarLabel:<Icon name="ios-search-outline" style={styles.icon}/>
      }
  render() {
    return (
      <AppNavigator />
    );
  }
}