import {StyleSheet, View, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';

import Text from './Text';
import useTheme from '../hooks/useTheme';

const ListTodo = ({todo, imgUri, completed, onPress}) => {
  const color = useTheme();
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, {backgroundColor: color.secondary}]}>
        <Image source={{uri: imgUri}} style={styles.image} resizeMode="cover" />
        <Text
          additionalStyles={[
            styles.todo,
            {color: color.primary},
            completed && {
              color: 'red',
              textDecorationLine: 'line-through',
              textDecorationStyle: 'solid',
            },
          ]}
          numberOfLines={2}>
          {todo}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListTodo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 13,
  },
  image: {
    width: 90,
    height: 70,
    position: 'relative',
  },
  todo: {
    paddingLeft: 10,
    flex: 1,
  },
});
