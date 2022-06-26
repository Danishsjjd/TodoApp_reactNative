import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isLogin: false,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setUserData: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {setIsLogin, setUserData} = authSlice.actions;

export default authSlice.reducer;
