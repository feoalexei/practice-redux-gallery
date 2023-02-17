import { createSlice } from '@reduxjs/toolkit';

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: [],
  reducers: {
    setImagesAction(_, { payload }) {
      return payload;
    },
  },
});

export const { setImagesAction } = gallerySlice.actions;

export const galleryReducer = gallerySlice.reducer;
