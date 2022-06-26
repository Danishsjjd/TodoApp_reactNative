import {StatusBar, StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {Button, Screen, Text, ThemeToggleBtn} from '../components';

const TodoDetailScreen = ({route}) => {
  const {imgUrl, completed, todo} = route.params;
  return (
    <Screen>
      <StatusBar translucent backgroundColor={'transparent'} />
      <Image source={{uri: imgUrl}} style={styles.img} />
      <View style={styles.bottomContainer}>
        <ThemeToggleBtn width={'100%'} />
        <Text
          color={'primary'}
          additionalStyles={[
            {marginTop: 20, textAlign: 'center'},
            completed && {
              color: 'red',
              textDecorationLine: 'line-through',
              textDecorationStyle: 'solid',
            },
          ]}>
          {todo}
        </Text>
      </View>
    </Screen>
  );
};

export default TodoDetailScreen;

const styles = StyleSheet.create({
  bottomContainer: {
    padding: 20,
  },
  img: {
    width: '100%',
    height: '35%',
    borderRadius: 10,
  },
});
