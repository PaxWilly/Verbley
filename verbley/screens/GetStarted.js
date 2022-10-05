import * as React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigation } from '@react-navigation/stack';

function GetStarted({ navigation }) {
  return (
    <View style={styles.container}>
    <Text style={styles.Logo}>Verbley</Text>

    <View style={styles.Name}>
    <TextInput style={styles.InputText}
    placeholder="First Name"
    placeholderTextColor="white" />
    </View>

    <View style={styles.Email}>
    <TextInput style={styles.InputText}
    placeholder="Email"
    placeholderTextColor="white" />
    </View>

    <View style={styles.Password}>
    <TextInput style={styles.InputText}
    placeholder="Password"
    placeholderTextColor="white"
    secureTextEntry={true} />
    </View>

    <TouchableOpacity 
    style={styles.Button}
    onPress={() => navigation.navigate('Search')}>
    <Text style={styles.GetStarted}>Get started</Text> 
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex:1,
    paddingTop:Constants.statusBarHeight,
    backgroundColor:'#ffde00',
  },
  Logo: {
    marginTop:100,
    fontSize:36,
    fontWeight:'bold',
    color:'#fff',
    fontFamily:'Optima',
    marginLeft:200
  },
  Name: {
    width:'80%',
    backgroundColor:'#ffde00',
    height:50,
    marginBottom:5,
    justifyContent:'center',
    marginLeft:40,
    borderColor:'#fff',
    borderBottomWidth:2
  },
  Email: {
    width:'80%',
    backgroundColor:'#ffde00',
    height:50,
    marginBottom:5,
    justifyContent:'center',
    marginLeft:40,
    borderColor:'#fff',
    borderBottomWidth:2
  },
  Password: {
    width:'80%',
    backgroundColor:'#ffde00',
    height:50,
    marginBottom:'5',
    justifyContent:'center',
    marginLeft:40,
    borderColor:'#fff',
    borderBottomWidth:2
  },
  InputText: {
    fontSize:16,
    color:'#fff',
    fontWeight:'bold'
  },
  Button: {
    width:'80%',
    backgroundColor:'#fff',
    borderColor:'#fff',
    borderRadius:15,
    borderWidth:2,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    marginTop:25,
    marginLeft:40
  },
  GetStarted: {
    fontSize:16,
    color:'#ffde00',
    fontWeight:'bold'
  },
});

export default GetStarted; 

