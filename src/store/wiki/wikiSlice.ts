import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { WikiState, WikiStateAPI } from './types';

import { fetchWikiDetailsThunk } from './thunks/fetchWikiDetailsThunk';

export const initialState: WikiState = {
  births: [],
  status: 'idle',
  error: null,
  // TODO: placeholder to implement other data
  // deaths: [],
  // holidays: [],
  // events: []
};

export const wikiSlice = createSlice({
  name: 'wiki',
  initialState,
  reducers: {
    setWikiDetails: (state, action: PayloadAction<WikiStateAPI>) => {
      const { births } = action.payload;
      state.births = births;
    },
    setWikiFetchState: (state, action: PayloadAction<string>) => {
      state.error = 'failed';
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchWikiDetailsThunk.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchWikiDetailsThunk.fulfilled, (state, action) => {
      state.status = 'succeeded';
    });
    builder.addCase(fetchWikiDetailsThunk.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const { reducer: wikiReducer, actions: wikiActions } = wikiSlice;
