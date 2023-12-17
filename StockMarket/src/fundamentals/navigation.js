import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ImgView from './imgView';
import Index from './index';
const Stack = createStackNavigator();

export default function FundamentalsNavigation() {
  return (
    <Stack.Navigator initialRouteName="Index">
      <Stack.Screen
        options={{headerShown: false}}
        name="ImgView"
        component={ImgView}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Index"
        component={Index}
      />
    </Stack.Navigator>
  );
}
