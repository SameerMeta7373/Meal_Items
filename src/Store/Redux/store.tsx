import {configureStore} from '@reduxjs/toolkit';
import favouriteReducer from './FavouriteSlice';

export const store = configureStore({
  reducer: {
    favouriteMeals: favouriteReducer,
  },
});
