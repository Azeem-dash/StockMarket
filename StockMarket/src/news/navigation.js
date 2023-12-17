import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NewsDetial from './newsDetial';
import Index from './index';
const Stack = createStackNavigator();

export default function NewsNavigation() {
  return (
    <Stack.Navigator initialRouteName="Index">
      <Stack.Screen
        options={{headerShown: false}}
        name="NewsDetial"
        component={NewsDetial}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Index"
        component={Index}
      />
    </Stack.Navigator>
  );
}
