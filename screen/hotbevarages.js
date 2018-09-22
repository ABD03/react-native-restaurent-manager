import React, { Component } from 'react';
import styles from '../style/styles.js';
import {
  TouchableOpacity,
  View,
  Image,
  ImageBackground
} from 'react-native';
import { Container,Content, Footer, FooterTab,Text,Icon, 
  Card, CardItem, Thumbnail,Button,Left, Body, Right} from 'native-base';
export default class Hotbevarages extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation
    return {
      headerTitle: 'HOT BEVERAGES',
      headerStyle: {
        backgroundColor: '#fff',
        elivation:1
      }
  }
}
  render() {
    return (
      <Container>
        <Text>Comming soon....</Text>
    </Container>
    );
  }
}
