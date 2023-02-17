import { createSlice } from '@reduxjs/toolkit';

const myGallery = createSlice({
  name: 'myGallery',
  initialState: [],
  reducers: {
    addMyImagesAction(state, { payload }) {
      return [...state, payload];
    },
    deleteMyImagesAction(state, { payload }) {
      return state.filter(image => image.id !== payload);
    },
  },
});

export const { addMyImagesAction, deleteMyImagesAction } = myGallery.actions;

export const myGalleryReducer = myGallery.reducer;
