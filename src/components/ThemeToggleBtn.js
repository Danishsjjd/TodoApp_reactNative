import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {toggleTheme} from '../store/themeSlice';
import Icon from './Icon';

const ThemeToggleBtn = ({width}) => {
  const dark = useSelector(state => state.themeSlice.dark);
  const dispatch = useDispatch();
  const toggleThemeBtn = () => {
    if (dark) return dispatch(toggleTheme(false));
    dispatch(toggleTheme(true));
  };
  return (
    <Icon
      icon={'theme-light-dark'}
      bgColor={'secondary'}
      roundness={15}
      size={35}
      color={'primary'}
      onPress={toggleThemeBtn}
      width={width}
    />
  );
};

export default ThemeToggleBtn;
