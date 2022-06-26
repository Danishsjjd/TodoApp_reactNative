import {StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthNavigator from './src/navigation/AuthNavigator';
import useTheme from './src/hooks/useTheme';
import {useDispatch, useSelector} from 'react-redux';
import {auth} from './src/config/firebase';
import {setIsLogin, setUserData} from './src/store/authSlice';
import AppNavigator from './src/navigation/AppNavigator';

export default function Main() {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.authSlice.isLogin);
  const dark = useSelector(state => state.themeSlice.dark);
  const colors = useTheme();

  const [barStyle, setBarStyle] = useState('dark-content');
  useEffect(() => {
    if (dark) {
      setBarStyle('light-content');
    } else {
      setBarStyle('dark-content');
    }
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(setUserData(user));
        dispatch(setIsLogin(true));
      } else {
        dispatch(setIsLogin(false));
        dispatch(setUserData({}));
      }
    });
  }, [dark]);
  return (
    <>
      <StatusBar barStyle={barStyle} backgroundColor={colors.background} />
      <NavigationContainer>
        {isLogin ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  );
}
