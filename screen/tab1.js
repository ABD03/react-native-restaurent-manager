
import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../style/styles.js';
import { Container,Content, Footer, FooterTab,Icon, 
  Card, CardItem, Thumbnail,Button,Left, Body, Right} from 'native-base';
import Starter from './home';
import Coffee from './coffee';
import Burger from './burger';
import Breakfast from './breakfast';
import Freshmilk from './freshmilk';
import Potatos from './potatos';
import Smoothies from './smoothies';
import Steskhouses from './steskhouses';
import Hotbevarages from './hotbevarages';
import Order from './order';
const AppNavigator = StackNavigator({
  loginscreen: { screen: Starter},
  coffeescreen: { screen: Coffee},
  burgerscreen:{ screen: Burger},
  breakfastscreen:{ screen: Breakfast},
  freshmilkscreen:{ screen: Freshmilk},
  potatoscreen:{ screen: Potatos},
  smoothscreen:{ screen: Smoothies},
  steskhousescreen:{ screen: Steskhouses},
  hotbevaragesscreen:{ screen: Hotbevarages},
  orderscreen:{ screen: Order}
}
);
export default class Tab1 extends Component {
  static navigationOptions = {
    tabBarLabel:<Icon name="ios-home-outline" style={styles.icon}/>
      }
  render() {
    return (
      <AppNavigator />
    );
  }
}