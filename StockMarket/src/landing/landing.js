/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Logo from '../assets/images/logo.jpeg';
import {WebView} from 'react-native-webview';

export default function landing() {
  return (
    <View style={[styles.container]}>
      <Image
        source={Logo}
        style={{height: 200, width: 270, top: 10, left: 40}}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    width: '100%',
  },
});
