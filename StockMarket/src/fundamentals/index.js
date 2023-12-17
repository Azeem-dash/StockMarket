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
      <View style={{height: '15%'}}>
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
              <Text style={{color: COLORS.white, ...FONTS.h1}}>Sector</Text>
            </View>
          </View>
        </View>
      </View>
      <>
        {/* Today's Share */}
        <View style={{height: '50%'}}>
          <View
            style={{
              flex: 1,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              // backgroundColor: COLORS.white,
            }}>
            <View
              style={{marginTop: SIZES.font, marginHorizontal: SIZES.padding}}>
              <View
                style={{
                  // flexDirection: 'column',
                  // alignItems: 'center',
                  margin: 10,
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: COLORS.black, ...FONTS.h1}}>
                  Automobile
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ImgView', {name: 'honda'});
                  }}>
                  <Text style={{color: COLORS.secondary, ...FONTS.h2}}>
                    Honda
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ImgView', {name: 'HPM'});
                  }}>
                  <Text style={{color: COLORS.secondary, ...FONTS.h2}}>
                    HINO PAK MOTORS
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  // flexDirection: 'column',
                  // alignItems: 'center',
                  margin: 10,
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: COLORS.black, ...FONTS.h1}}>
                  Engineering
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ImgView', {name: 'ASM'});
                  }}>
                  <Text style={{color: COLORS.secondary, ...FONTS.h2}}>
                    Amreeli steel mils
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ImgView', {name: 'PSM'});
                  }}>
                  <Text style={{color: COLORS.secondary, ...FONTS.h2}}>
                    Pakistan steel mills
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  // flexDirection: 'column',
                  // alignItems: 'center',
                  margin: 10,
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: COLORS.black, ...FONTS.h1}}>
                  Oil And Gas
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ImgView', {name: 'PSO'});
                  }}>
                  <Text style={{color: COLORS.secondary, ...FONTS.h2}}>
                    Pakistan state oil
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ImgView', {name: 'Shell'});
                  }}>
                  <Text style={{color: COLORS.secondary, ...FONTS.h2}}>
                    Shell Pakistan ltd
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
