/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {images, icons, COLORS, FONTS, SIZES} from '../constants';

const NewsDetial = props => {
  console.log(props.route.params.item.content);
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        margin: 10,
      }}>
      <SafeAreaView />
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          borderRadius: 20,
          marginRight: 10,
          left: 10,
        }}
        onPress={() => {
          props.navigation.goBack();
          console.log('back');
        }}>
        <Image
          source={images.back}
          style={{
            width: 25,
            height: 25,
          }}
        />
      </TouchableOpacity>
      <ScrollView>
        <Text style={{color: COLORS.black, ...FONTS.h3}}>
          {props.route.params.item.content}
        </Text>
      </ScrollView>
    </View>
  );
};
export default NewsDetial;
