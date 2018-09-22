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
export default class orders extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation
    return {
      headerTitle: 'My Cart',
      headerStyle: {
        elevation: 14,
        backgroundColor: '#fff',
      },
      headerRight:  
      <TouchableOpacity >
<Icon name="ios-add-outline" style={styles.hicon}/>
        </TouchableOpacity>,
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
        name: 'GRILLED CHICKEN BURGER',
        avatar_url: require("../icon/GCB.jpg"),
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
                <Image source={l.avatar_url} style={{ height: 120, width: null, flex: 1 }} />
                </Left>
                <Body>
                <CardItem>
              <Text style={styles.itemtext}>{l.name}</Text>
              </CardItem>
              <CardItem>
              <Text style={styles.itemprice}>{l.price}.AED</Text>
              </CardItem>
              <CardItem>
              <Text style={styles.itemprice}>1 unit</Text>
              </CardItem>
                </Body>
              <Right>
              <CardItem>
              <Button danger small transparent onPress={() => alert("item deleted")}><Icon name="ios-close-circle-outline" style={styles.icon}/></Button>
              </CardItem>
              <CardItem>
              <Button warning small transparent onPress={() => alert("item edit")}><Icon name="ios-create-outline" style={styles.icon}/></Button>
              </CardItem>
              </Right>
              </CardItem>
            </Card>
          </TouchableOpacity>
    ))
  }
        </Content>
        <View style={{marginLeft:10,marginRight:10}}>
        <Button success full block rounded onPress={() => alert("Order is success")}><Text>Order Now</Text></Button>
            </View>
    </Container>
    );
  }
}
