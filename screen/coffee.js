import React, { Component } from 'react';
import styles from '../style/styles.js';
import {
  TouchableOpacity,
  TextInput,
  View,
  Image,
  ImageBackground,
  Modal, TouchableHighlight, Alert
} from 'react-native';
import {
  Container, Content, Footer, FooterTab, Text, Icon,
  Card, CardItem, Thumbnail, Button, Left, Body, Right
} from 'native-base';
export default class Coffee extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation
    return {
      headerTitle: 'COFFEE',
      headerStyle: {
        elevation: 14,
        backgroundColor: '#fff',
      }
    }
  }
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    const list = [
      {
        id:2,
        name: 'CAFE LATTE',
        avatar_url: require("../icon/CL.jpg"),
        price:100
      },
      {
        id:2,
        name: 'CAPPUCCINO',
        avatar_url: require("../icon/CP.jpg"),
        price:110
      },
      {
        id:3,
        name: 'CAFFÈ AMERICANO',
        avatar_url: require("../icon/CA.jpg"),
        price:110
      },
      {
        id:4,
        name: 'CAFFÈ MOCHA',
        avatar_url: require("../icon/CM.jpg"),
        price:110
      },
      {
        id:5,
        name: 'WHITE CHOCOLATE',
        avatar_url: require("../icon/WC.jpg"),
        price:110
      },
      {
        id:6,
        name: 'CARAMEL MOCHA',
        avatar_url: require("../icon/CH.jpg"),
        price:110
      },
      {
        id:7,
        name: 'ESPRESSO DOUBLE SHOT',
        avatar_url: require("../icon/DE.jpg"),
        price:110
      },
    ]
    return (
      <Container>
         <Content>
          {
    list.map((l, i) => (
<TouchableOpacity onPress={() => this.props.navigation.navigate('orderscreen', {
            itemId: l.id,
            otherParam: l.name,
            price:l.price,
            image:l.avatar_url
          })}>
          <View style={{backgroundColor:'#e2e1e0', height:1,marginLeft:8,marginRight:8}}/>
            <Card transparent paddr>
              <CardItem cardBody>
                <Left>
                <Image source={l.avatar_url} style={{ height: 110, width: null, flex: 1 }} />
                </Left>
              <Right>
              <CardItem>
              <Text style={styles.itemtext}>{l.name}</Text>
              </CardItem>
              <CardItem>
              <Text style={styles.itemprice}>{l.price}.AED</Text>
              </CardItem>
              </Right>
              </CardItem>
            </Card>
          </TouchableOpacity>
    ))
  }
        </Content>
    </Container>
    );
  }
}
