import { configureStore } from '@reduxjs/toolkit';
import { galleryReducer } from './gallery/gallery-slice';
import { myGalleryReducer } from './myGallery/myGallery-slice';
// import { rootReducer } from './reducer';

export const store = configureStore({
  reducer: {
    images: galleryReducer,
    myImages: myGalleryReducer,
  },
});
