import {StyleSheet, TouchableWithoutFeedback, View, Text} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useTheme from '../hooks/useTheme';

const Icon = ({
  icon,
  size,
  roundness,
  bgColor,
  color,
  onPress,
  cusColor,
  width,
}) => {
  const colors = useTheme();
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.container,
          {borderRadius: roundness, backgroundColor: colors[bgColor]},
          width && {width},
        ]}>
        <MaterialCommunityIcons
          name={icon}
          size={size}
          color={cusColor || colors[color]}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Icon;

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
