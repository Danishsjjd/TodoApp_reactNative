import React from 'react';
import Text from '../Text';

export default function ErrorMessage({visible = false, error}) {
  if (!visible || !error) return null;
  return <Text additionalStyles={{color: 'red'}}>{error}</Text>;
}
