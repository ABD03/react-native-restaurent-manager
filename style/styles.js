import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  icon: {
    color: '#252526',
    fontSize:29,
    
  },
  hicon: {
    color: '#252526',
    fontSize:35,
    marginRight:15,
    fontWeight:'bold'

  },
  mbtn2: {
    flexDirection: 'row',
    flex:2,
  },
  buttonContainer: {
    borderRadius:4,
    borderColor: '#f2f2f2',
    borderWidth: 1,
    flex:1,
  },
  menutext:{
    color: '#fff',
    fontSize:26,
    fontWeight:'bold',
    textAlign:'center'
  },
  menualign:{
    justifyContent: 'center',
  },
  search:{
    backgroundColor:'#FFF',
    padding:5
  },
  TextInputStyleClass:{
    textAlign: 'left',
    borderRadius:4,
    height: 40,
    borderWidth: 1,
    borderColor: '#e0e0e5',
    backgroundColor : "#FFF",
         
    },
    itemtext:{
      fontSize:16,
      fontWeight:'bold'
    },
    orderprice:{
      color:'#af6300',
      fontSize:17,
      fontWeight:'bold'
    },
    ordername:{
      color:'#af6300',
      fontSize:17,
      fontWeight:'bold'
    },
    itemprice:{
      fontSize:15,
      color:'#7f7d7b',
      fontWeight:'bold'
    },
    TextInputStyleClass:{
      textAlign: 'left',
      height: 45,
      borderWidth: 1,
      borderColor: '#adadad',
      borderRadius:1,
      backgroundColor : "#FFFFFF",
           
      }
})