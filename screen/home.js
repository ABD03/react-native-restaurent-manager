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
export default class home extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation
    return {
      headerTitle: 'Tea Break',
      headerStyle: {
        backgroundColor: '#fff',
      }
  }
}
  render() {
    return (
      <Container>
        <Content >
          <View>
          <View style={styles.mbtn2}>
        <TouchableOpacity  elevation={5} style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('coffeescreen')}>
                   <ImageBackground source={require("../icon/BB.jpg")} style={{height: 200, width: null, flex: 1,justifyContent: 'center'}}>
                   <View style={styles.menualign}>
              <Text style={styles.menutext}>COFFEE</Text>
              </View>
              </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity  elevation={5} style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('burgerscreen')}>
        <ImageBackground source={require("../icon/FF.jpg")}  style={{height: 200, width: null, flex: 1,justifyContent: 'center'}}>
        <View style={styles.menualign}>
              <Text style={styles.menutext}>BURGERS</Text>
              </View>
              </ImageBackground>
        </TouchableOpacity>
        </View>
        

        <View style={styles.mbtn2}>
        <TouchableOpacity  elevation={5} style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('breakfastscreen')}>
                   <ImageBackground source={require("../icon/BF.jpg")} style={{height: 200, width: null, flex: 1,justifyContent: 'center'}}>
                   <View style={styles.menualign}>
              <Text style={styles.menutext}>BREAKFAST</Text>
              </View>
              </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity  elevation={5} style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('freshmilkscreen')}>
        <ImageBackground source={require("../icon/FM.jpg")}  style={{height: 200, width: null, flex: 1,justifyContent: 'center'}}>
        <View style={styles.menualign}>
              <Text style={styles.menutext}>FRESH MILK</Text>
              </View>
              </ImageBackground>
        </TouchableOpacity>
        </View>

        <View style={styles.mbtn2}>
        <TouchableOpacity  elevation={5} style={styles.buttonContainer}
         onPress={() => this.props.navigation.navigate('potatoscreen')}>
                   <ImageBackground source={require("../icon/PT.jpg")} style={{height: 200, width: null, flex: 1,justifyContent: 'center'}}>
                   <View style={styles.menualign}>
              <Text style={styles.menutext}>POTATOS</Text>
              </View>
              </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity  elevation={5} style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('smoothscreen')}>
        <ImageBackground source={require("../icon/SM.jpg")}  style={{height: 200, width: null, flex: 1,justifyContent: 'center'}}>
        <View style={styles.menualign}>
              <Text style={styles.menutext}>SMOOTHIE</Text>
              </View>
              </ImageBackground>
        </TouchableOpacity>
        </View>

        <View style={styles.mbtn2}>
        <TouchableOpacity  elevation={5} style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('steskhousescreen')}>
                   <ImageBackground source={require("../icon/SH.jpg")} style={{height: 200, width: null, flex: 1,justifyContent: 'center'}}>
                   <View style={styles.menualign}>
              <Text style={styles.menutext}>STEAKHOUSES</Text>
              </View>
              </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity  elevation={5} style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('hotbevaragesscreen')}>
        <ImageBackground source={require("../icon/HB.jpg")}  style={{height: 200, width: null, flex: 1,justifyContent: 'center'}}>
        <View style={styles.menualign}>
              <Text style={styles.menutext}>HOT BEVERAGES</Text>
              </View>
              </ImageBackground>
        </TouchableOpacity>
        </View>
          </View>
        </Content>
    </Container>
    );
  }
}
