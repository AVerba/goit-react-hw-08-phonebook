import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    setFilter: (state, { payload }) => {
      return { filter: payload };
    },
  },
});

export const { setFilter } = contactsSlice.actions;
export const getFilter = state => state.filter;
