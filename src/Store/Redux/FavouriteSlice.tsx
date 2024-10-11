import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IFavouriteState {
  ids: string[];
}

const initialState: IFavouriteState = {
  ids: [],
};

const favouriteSlice = createSlice({
  name: 'favourites',
  initialState,
  //reducers used to change the state
  reducers: {
    addFavourite: (state, action: PayloadAction<{id: string}>) => {
      state.ids.push(action.payload.id);
    },
    removeFavourite: (state, action: PayloadAction<{id: string}>) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavourite = favouriteSlice.actions.addFavourite;
export const removeFavourite = favouriteSlice.actions.removeFavourite;

export default favouriteSlice.reducer;
