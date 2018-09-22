import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image
} from 'react-native';
import {TabNavigator} from 'react-navigation';
import styles from '../style/styles.js';
import Tab1 from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';
import Tab4 from './tab4';

var MainScreenNavigator = TabNavigator({
  screen1 :{screen: Tab1},
  screen2 :{screen: Tab2},
  screen3 :{screen: Tab3},
  screen4 :{screen: Tab4}
},
{
  tabBarPosition: 'bottom',
  swipeEnabled:true,
    tabBarOptions: {
      style: {
        elevation: 10,
        backgroundColor: "#fff",
        overflow: "hidden",
      },
      activeTintColor: "black",
      inactiveTintColor: "white",
      tabStyle: { height: 50 },
      indicatorStyle: { backgroundColor: 'black' }
    }

})
 
MainScreenNavigator.navigationOptions = ({ navigation }) => {
  const { state } = navigation
  return {
    header: null,
  }
}
 export default MainScreenNavigator;

