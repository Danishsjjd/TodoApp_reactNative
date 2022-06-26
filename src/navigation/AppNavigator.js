import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TodoScreen} from '../screens';
import routes from './routes';
import TodoDetailScreen from '../screens/TodoDetailScreen';

const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.TODO} component={TodoScreen} />
      <Stack.Screen
        name={routes.TODO_DETAIL_SCREEN}
        component={TodoDetailScreen}
      />
    </Stack.Navigator>
  );
}
