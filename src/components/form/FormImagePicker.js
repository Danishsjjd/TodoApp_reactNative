import {useFormikContext} from 'formik';
import React from 'react';
import {View} from 'react-native';

import ErrorMessage from './ErrorMessage';
import ImagePicker from '../ImagePicker';

const FormImagePicker = ({name}) => {
  const {values, errors, touched, setFieldValue} = useFormikContext();
  return (
    <View>
      <ImagePicker
        uri={values[name]}
        setUri={uri => setFieldValue(name, uri.uri)}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </View>
  );
};

export default FormImagePicker;
