import React from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useTheme from '../hooks/useTheme';

export default function AppTextInput({
  icon,
  placeholder,
  additionalStyle,
  onIconPress,
  ...otherProps
}) {
  const colors = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.secondary}]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.primaryLight}
        style={[styles.textInput, {color: colors.primary}, additionalStyle]}
        {...otherProps}
      />
      {icon && (
        <TouchableWithoutFeedback onPress={onIconPress}>
          <MaterialCommunityIcons
            name={icon}
            color={colors.primary}
            size={25}
          />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 18,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
  },
});
