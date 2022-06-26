import {Text, StyleSheet, Platform} from 'react-native';
import React from 'react';
import useTheme from '../hooks/useTheme';

export default function AppText({
  color,
  additionalStyles,
  children,
  ...otherProps
}) {
  const colors = useTheme();
  return (
    <Text
      style={[styles.text, {color: colors[color]}, additionalStyles]}
      {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    fontSize: 18,
  },
});
