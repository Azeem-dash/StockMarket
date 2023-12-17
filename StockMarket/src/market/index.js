/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {images, icons, COLORS, FONTS, SIZES} from '../constants';

const Home = ({navigation}) => {
  // Dummy Data

  return (
    <View style={styles.container}>
      {/* New Plants */}
      <View style={{height: '15%', backgroundColor: COLORS.white}}>
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.primary,
          }}>
          <View
            style={{
              marginTop: SIZES.padding * 2,
              marginHorizontal: SIZES.padding,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: COLORS.white, ...FONTS.h1}}>Market</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
