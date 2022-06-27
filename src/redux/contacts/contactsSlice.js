import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    filterContact: (state, { payload }) => {
      return { filter: payload };
    },
  },
});

export default contactsSlice.reducer;
