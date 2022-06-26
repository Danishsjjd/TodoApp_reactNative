import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import Text from './Text';
import useTheme from '../hooks/useTheme';

export default function AppButton({
  title,
  color,
  bgColor,
  additionalStyles,
  onPress,
  cusColor,
}) {
  const colors = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {backgroundColor: colors[bgColor]},
        additionalStyles,
      ]}>
      <Text
        additionalStyles={[
          {color: colors[color], textAlign: 'center'},
          cusColor && {color: cusColor},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
});
