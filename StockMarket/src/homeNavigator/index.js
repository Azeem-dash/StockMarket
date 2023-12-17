/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Image} from 'react-native';
// import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../home/Home';
import FundamentalsNavigation from '../fundamentals/navigation';
import NewsNavigation from '../news/navigation';
import Market from '../market/index';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import {images, icons, COLORS, FONTS, SIZES} from '../constants';

export default function StackNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          // backgroundColor: 'white',
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
        },
        tabBarItemStyle: {
          // backgroundColor: 'green',
          margin: 10,
          borderRadius: 100,
          height: '100%',
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: e => {
            return (
              <Image
                source={images.home}
                resizeMode="cover"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 15,
                }}
              />
            );
          },

          tabBarLabel: '',

          tabBarLabelStyle: {
            color: 'black',
            fontSize: 18,
          },
          tabBarActiveBackgroundColor: 'green',
          // tabBarInactiveBackgroundColor: 'grey',
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: e => {
            return (
              <Image
                source={images.news}
                resizeMode="cover"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 15,
                }}
              />
            );
          },
          tabBarLabel: '',
          tabBarLabelStyle: {color: 'black', fontSize: 20, textAlign: 'center'},
          tabBarActiveBackgroundColor: 'green',
          // tabBarInactiveBackgroundColor: 'grey',
        }}
        name="NewsNavigation"
        component={NewsNavigation}
      />
      <Tab.Screen
        options={{
          tabBarIcon: e => {
            return (
              <Image
                source={images.funda}
                resizeMode="cover"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 15,
                }}
              />
            );
          },
          tabBarLabel: '',
          tabBarLabelStyle: {color: 'black', fontSize: 20, textAlign: 'center'},
          tabBarActiveBackgroundColor: 'green',
          // tabBarInactiveBackgroundColor: 'grey',
        }}
        name="FundamentalsNavigation"
        component={FundamentalsNavigation}
      />
      <Tab.Screen
        options={{
          tabBarIcon: e => {
            return (
              <Image
                source={images.Market}
                resizeMode="cover"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 15,
                }}
              />
            );
          },
          tabBarLabel: '',
          tabBarLabelStyle: {color: 'black', fontSize: 20, textAlign: 'center'},
          tabBarActiveBackgroundColor: 'green',
          // tabBarInactiveBackgroundColor: 'grey',
        }}
        name="Market"
        component={Market}
      />
    </Tab.Navigator>
  );
}
