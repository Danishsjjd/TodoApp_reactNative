import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen, RegisterScreen} from '../screens';
import routes from './routes';

const Stack = createNativeStackNavigator();
export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={routes.LOGIN}
        component={LoginScreen}
        options={{animation: 'slide_from_left'}}
      />
      <Stack.Screen
        name={routes.REGISTER}
        component={RegisterScreen}
        options={{animation: 'slide_from_right'}}
      />
    </Stack.Navigator>
  );
}
