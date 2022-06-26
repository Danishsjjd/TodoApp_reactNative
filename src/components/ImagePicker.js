import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {launchImageLibrary} from 'react-native-image-picker';

import useTheme from '../hooks/useTheme';

const ImagePicker = ({uri, setUri}) => {
  const colors = useTheme();

  const handleGallery = async () => {
    try {
      const results = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.5,
      });
      setUri(results.assets[0]);
    } catch (error) {
      alert(error);
    }
  };

  const handleImagePress = () => {
    Alert.alert('Delete', 'Are you sure want to delete this pic', [
      {text: 'Yes', onPress: () => setUri({})},
      {text: 'No'},
    ]);
  };
  return (
    <TouchableWithoutFeedback onPress={handleGallery}>
      <View style={[styles.container, {backgroundColor: colors.secondary}]}>
        {uri ? (
          <TouchableWithoutFeedback onPress={handleImagePress}>
            <Image source={{uri: uri}} style={styles.image} />
          </TouchableWithoutFeedback>
        ) : (
          <MaterialCommunityIcons
            name="camera"
            size={35}
            color={colors.primary}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 75,
    height: 75,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
