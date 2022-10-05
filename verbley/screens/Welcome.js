import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Welcome({ navigation }) {
  return ( 
    <View style={styles.container}>
      <Text style={styles.Logo}>Verbley</Text>

          <TouchableOpacity 
          style={styles.getStartedButton}
          onPress={() => navigation.navigate('Get started')}>
            <Text style={styles.getStarted}>Get started</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.signInButton}
          onPress={() => navigation.navigate('Sign in')}>
            <Text style={styles.signIn}>Sign in</Text>
          </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex:1,
    paddingTop:Constants.statusBarHeight,
    backgroundColor:'#ffde00',
    padding:2,
    alignItems:'center'
  },
  Logo: {
    marginTop:75,
    fontSize:70,
    fontWeight:'bold',
    textAlign:'center',
    color:'white',
    fontFamily:'Optima',
  },
  getStartedButton: {
    width:'95%',
    backgroundColor:'white',
    marginTop:540,
    borderRadius:20,
    height:60,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:7
  },
  getStarted: {
    color:'#ffde00',
    fontSize:16,
    fontWeight:'bold'
  },
  signInButton: {
    width:'95%',
    backgroundColor:'#ffde00',
    borderColor:'#fff',
    borderRadius:20,
    borderWidth:2,
    height:60,
    alignItems:'center',
    justifyContent:'center'
  },
  signIn: {
    color:'#fff',
    fontSize:'16',
    fontWeight:'bold'
  },
});

export default Welcome; 

