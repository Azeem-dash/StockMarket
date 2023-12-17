/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {images, icons, COLORS, FONTS, SIZES} from '../constants';
import {WebView} from 'react-native-webview';
export default function ImgView(props) {
  console.log(props.route.params.name);
  return (
    <View style={[styles.container]}>
      <SafeAreaView />
      <View style={{top: 20}}>
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
      </View>
      {props.route.params.name === 'honda' ? (
        <View style={{marginTop: 50}}>
          <Text style={{color: COLORS.black, ...FONTS.h2}}>Honda</Text>
          <ScrollView>
            <ScrollView horizontal={true}>
              <Image source={images.honda1} style={{width: 1000}} />
            </ScrollView>
            <ScrollView horizontal={true}>
              <Image source={images.honda2} style={{width: 1000}} />
            </ScrollView>
          </ScrollView>
        </View>
      ) : null}

      {props.route.params.name === 'HPM' ? (
        <View style={{marginTop: 50}}>
          <Text style={{color: COLORS.black, ...FONTS.h2}}>
            HINO PAK MOTORS
          </Text>
          <ScrollView horizontal={true}>
            <ScrollView>
              <Image source={images.hino} style={{width: 1000}} />
            </ScrollView>
          </ScrollView>
        </View>
      ) : null}

      {props.route.params.name === 'ASM' ? (
        <View style={{marginTop: 50}}>
          <Text style={{color: COLORS.black, ...FONTS.h2}}>
            Amreeli steel mils
          </Text>
          <ScrollView horizontal={true}>
            <ScrollView>
              <Image source={images.ameerli} style={{width: 1000}} />
            </ScrollView>
          </ScrollView>
        </View>
      ) : null}

      {props.route.params.name === 'PSO' ? (
        <View style={{marginTop: 50}}>
          <Text style={{color: COLORS.black, ...FONTS.h2}}>
            Pakistan state oil
          </Text>
          <ScrollView horizontal={true}>
            <ScrollView>
              <Image source={images.ameerli} style={{width: 1000}} />
            </ScrollView>
          </ScrollView>
        </View>
      ) : null}

      {props.route.params.name === 'PSM' ? (
        <View style={{marginTop: 50}}>
          <Text style={{color: COLORS.black, ...FONTS.h2}}>
            Pakistan steel mills
          </Text>
          <ScrollView horizontal={true}>
            <ScrollView>
              <Image source={images.paksteel} style={{width: 1000}} />
            </ScrollView>
          </ScrollView>
        </View>
      ) : null}

      {props.route.params.name === 'Shell' ? (
        <View style={{marginTop: 50}}>
          <Text style={{color: COLORS.black, ...FONTS.h2}}>
            Shell Pakistan ltd
          </Text>

          <ScrollView horizontal={true}>
            <View>
              <ScrollView>
                <Image source={images.shell} style={{width: 1000}} />
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
