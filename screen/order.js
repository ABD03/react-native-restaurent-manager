import React, { Component } from 'react';
import styles from '../style/styles.js';
import {
  TouchableOpacity,
  View,
  Image,
  ImageBackground
} from 'react-native';
import { Container,Content, Footer, FooterTab,Text,Icon, 
  Card, CardItem, Thumbnail,Button,Left, Body, Right,Input,List,ListItem} from 'native-base';
export default class Order extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation
    return {
      headerTitle: 'Orders',
      headerStyle: {
        backgroundColor: '#fff',
        elivation:1
      }
  }
}
handleClick = (name) => {
  alert('order success',name);
}

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId');
    const otherParam = navigation.getParam('otherParam');
    const price = navigation.getParam('price');
    const image = navigation.getParam('image');
    return (
      <Container>
        <Content>
          <Card transparent>
          <CardItem cardBody>
                <Image source={(image)} style={{ height: 210, width: null, flex: 1 }} />
              </CardItem>
              <Card transparent>
              <List>
            <ListItem>
              <Left>
              <Text style={styles.ordername}>{(otherParam)}</Text>
              </Left>
            </ListItem>
            <ListItem>
             <Left>
                <Text>Unit Price</Text>
              </Left>
              <Right>
              <Text style={styles.orderprice}>{(price)}.AED</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Unit</Text>
              </Left>
              <Right style={{flexDirection:'row'}}>
              <Button small bordered>
            <Text>-</Text>
          </Button>
              <Button small bordered>
            <Text>+</Text>
          </Button>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Total</Text>
              </Left>
              <Right>
              <Text style={styles.orderprice}>{(price)}.AED</Text>
              </Right>
            </ListItem>
          </List>
          <View style={{flex:1}}>
          <View style={{flex:1,flexDirection:'row'}}>
          <View style={{flex:1,marginLeft:1,marginRight:2,marginBottom:4}}>
             
             </View>
          </View>
          </View>
             </Card>
           </Card>
        </Content>
        <View style={{marginLeft:10,marginRight:10}}>
        <Button warning full block rounded onPress={() => alert("item added to cart")}><Text> Add Cart </Text></Button>
            </View>
    </Container>
    );
  }
}
