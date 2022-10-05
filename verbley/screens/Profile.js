import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';

function Profile() {
  return (
    <View style={styles.container}>
      <Image style={styles.Pic} />
      <Text style={styles.Name}>Paxton</Text>

      <TouchableOpacity style={styles.Button1}>
      <Text style={styles.Text}>Create Post</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Button2}>
      <Text style={styles.Text}>Messages</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create ({
container: {
  flex:1,
  paddingTop:Constants.statusBarHeight,
  backgroundColor:'#ffde00',
  alignItems:'left'
},
  Pic: {
    height:150,
    borderRadius:250,
    borderColor:'#fff',
    width:'36%',
    marginTop:50,
    borderWidth:2,
    marginLeft:25
  },
  Name: {
    fontSize:36,
    fontFamily:'Optima',
    color:'#fff',
    marginTop:-100,
    marginLeft: 200,
    fontWeight:'bold' 
  },
  Button1: {
    borderRadius:15,
    borderWidth:2,
    borderColor:'#fff',
    width:'43%',
    height:36,
    alignItems:'center',
    marginLeft:25,
    marginTop:80
  },
  Text: {
    color:'#fff',
    fontWeight:'bold',
    marginTop:6,
    fontSize:16
  },
  Button2: {
    borderRadius:15,
    borderWidth:2,
    borderColor:'#fff',
    width:'43%',
    height:36,
    alignItems:'center',
    marginLeft:212,
    marginTop:-36
  },
});

export default Profile; 
