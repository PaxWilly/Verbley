import * as React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigation } from '@react-navigation/stack';

function SignIn({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.Logo}>Verbley</Text>

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

      <TouchableOpacity>
      <Text style={styles.Forgot}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.Button}
      onPress={() => navigation.navigate('Search')}>
      <Text style={styles.SignIn}>Sign in</Text>
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
    color:'#fff',
    fontFamily:'Optima',
    fontWeight:'bold',
    fontSize:36,
    marginTop:100,
    marginLeft:200
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
    marginBottom:5,
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
  Forgot: {
    color:'#fff',
    fontSize:14,
    textAlign:'center',
    marginTop:7
  },
  Button: {
    width:'80%',
    backgroundColor:'#ffde00',
    borderColor:'#fff',
    borderRadius:15,
    borderWidth:2,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    marginTop:25,
    marginLeft:40
  },
  SignIn:{
    fontSize:16,
    color:'#fff',
    fontWeight:'bold'
  },
});

export default SignIn;

