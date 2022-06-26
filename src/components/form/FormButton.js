import React, {useState, useEffect} from 'react';
import {useFormikContext} from 'formik';

import Button from '../Button';

export default function FormButton({title, additionalStyles}) {
  const [allFieldsOk, setAllFieldsOk] = useState({
    color: 'primary',
    bgColor: 'secondary',
  });
  const {handleSubmit, errors} = useFormikContext();

  useEffect(() => {
    if (Object.keys(errors).length <= 0) {
      setAllFieldsOk({
        color: 'secondary',
        bgColor: 'primary',
      });
    } else {
      setAllFieldsOk({
        color: 'primary',
        bgColor: 'secondary',
      });
    }
  }, [errors]);

  return (
    <Button
      {...allFieldsOk}
      onPress={handleSubmit}
      title={title}
      additionalStyles={additionalStyles}
    />
  );
}
