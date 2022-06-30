import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter(state, action) {
      return { ...state, filter: action.payload };
    },
  },
});

export const { setFilter } = contactsSlice.actions;
