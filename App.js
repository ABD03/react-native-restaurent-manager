import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container,Content, Footer, FooterTab,Icon, 
  Card, CardItem, Thumbnail,Button,Left, Body, Right} from 'native-base';
import Starter from './screen/main';
import styles from './style/styles.js';
const AppNavigator = StackNavigator({
  loginscreen: { screen: Starter}
}
);
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    timePassed: false
    };
  }
  
  componentDidMount() {
    setTimeout( () => {
       this.setTimePassed();
    },700);
  }
  
  setTimePassed() {
     this.setState({timePassed: true});
  }
  render() {
      if (!this.state.timePassed){
        return<Container style={{backgroundColor: '#fff'}}>
        <Content>
          <View style={{justifyContent:'center',alignItems:'center',marginTop:200}}>
        <Image source={require("./icon/logo.png")} style={{height: 200, width:250, justifyContent:'center'}}/>
        </View>
        </Content>
        </Container>;
      }else{
        return (
          <AppNavigator />
        );
      }
      
  }
}
