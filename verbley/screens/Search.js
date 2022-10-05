import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Search({ navigation }) {
  return (
    <View style={styles.container}>
    <View style={styles.Top}>
      <View style={styles.Search}>
      <TextInput style={styles.InputText} 
      placeholder="Search" 
      placeholderTextColor="#ffde00" />
      </View>
    </View>
      <TouchableOpacity 
      style={styles.ProfileButton}
      onPress={() => navigation.navigate('Profile')}> 
      <Text style={styles.Profile}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex:1,
    paddingTop:Constants.statusBarHeight,
    backgroundColor:'#ffde00'
  },
  Top: {
    height:90,
    backgroundColor:'#fff',
    width:'90%',
    alignSelf:'center',
    borderRadius:15,
    /*elevation:10,
    shadowColor:'#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5*/
  },
  ProfileButton: {
    backgroundColor:'#fff',
    height:40,
    marginTop:690,
    width:'36%',
    alignSelf:'center',
    borderRadius:15
  },
  Profile: {
    alignSelf:'center',
    marginTop:10,
    color:'#ffde00',
    fontWeight:'bold',
    fontSize:16
  },
  Search: {
    backgroundColor:'#fff',
    marginTop:15,
    width:'65%',
    height:36,
    borderBottomWidth:2,
    borderBottomColor:'#ffde00',
    marginLeft:70
  },
  InputText: {
    marginTop:8,
    fontSize:16,
    fontWeight:'bold',
    color:'#ffde00'
  },
});

export default Search;
