import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import useTheme from '../hooks/useTheme';

export default function Screen({children, additionalStyles}) {
  const colors = useTheme();
  return (
    <SafeAreaView
      style={[
        styles.container,
        additionalStyles,
        {backgroundColor: colors.background},
      ]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
