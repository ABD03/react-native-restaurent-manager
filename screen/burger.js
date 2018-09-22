import React, { Component } from 'react';
import styles from '../style/styles.js';
import {
  TouchableOpacity,
  View,
  Image,
  ImageBackground
} from 'react-native';
import { Container,Content, Footer, FooterTab,Text,Icon, 
  Card, CardItem, Thumbnail,Button,Left, Body, Right ,Col,R} from 'native-base';
export default class Burger extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation
    return {
      headerTitle: 'BURGERS',
      headerStyle: {
        backgroundColor: '#fff',
        elivation:1
      }
  }
}



  render() {
    const list = [
      {
        id:1,
        name: 'SIGNATURE BURGER',
        avatar_url: require("../icon/SB.jpg"),
        price:100
      },
      {
        id:2,
        name: 'GRILLED BEEF BURGER',
        avatar_url: require("../icon/GBB.jpg"),
        price:110
      },
      {
        id:2,
        name: 'GRILLED CHICKEN BURGER',
        avatar_url: require("../icon/GCB.jpg"),
        price:110
      },
      {
        id:2,
        name: 'CHICKEN TENDER GRILL',
        avatar_url: require("../icon/GTB.jpg"),
        price:110
      },
      {
        id:2,
        name: 'GRAND BEEF BURGER',
        avatar_url: require("../icon/GBG.jpg"),
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
