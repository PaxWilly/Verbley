import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

function Chat() {
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex:1,
    paddingTop:Constants.statusBarHeight,
    backgroundColor:'#ffffe6',
    alignItems:'center'
  },

});

export default Chat;
