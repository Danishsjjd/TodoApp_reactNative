import {StyleSheet, View} from 'react-native';
import React from 'react';
import Icon from './Icon';
import useTheme from '../hooks/useTheme';

const HiddenLayer = ({deletePress, completePress}) => {
  const color = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: color.secondary}]}>
      <Icon
        icon={'trash-can'}
        bgColor="secondary"
        cusColor={'red'}
        size={25}
        onPress={deletePress}
      />
      <Icon
        icon={'sticker-check'}
        bgColor="secondary"
        color={'primary'}
        size={25}
        onPress={completePress}
      />
    </View>
  );
};

export default HiddenLayer;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    height: 70,
    overflow: 'hidden',
  },
});
