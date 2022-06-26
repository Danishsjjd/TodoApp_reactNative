import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {db, storage} from '../config/firebase';

export const addData = createAsyncThunk(
  'todoSlice/addTodo',
  async (data, store) => {
    const currentDate = Date.now();
    data.setLoading(true);
    try {
      const reference = storage.ref(
        `${'todoImages/' + currentDate + '--'}data.image.fileName`,
      );
      await reference.putFile(data.image);
      const imgUrl = await storage
        .ref(`${'todoImages/' + currentDate + '--'}data.image.fileName`)
        .getDownloadURL();
      const fullFinalData = await db.collection('todos').add({
        todo: data.todo,
        completed: false,
        imgUrl,
        userId: store.getState().authSlice.user.uid,
      });
      const finalData = {...fullFinalData, id: fullFinalData.id};
      data.setLoading(false);
      data.resetForm();
      return finalData;
    } catch (error) {
      console.log('error', error);
    }
  },
);

const initialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {
    getAllTodo: (state, action) => {
      state.todo = action.payload;
    },
  },
});

export default todoSlice.reducer;
export const {getAllTodo} = todoSlice.actions;
