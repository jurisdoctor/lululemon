import { createAsyncThunk } from '@reduxjs/toolkit';
import { wikiActions } from '../wikiSlice';

export const fetchWikiDetailsThunk = createAsyncThunk(
  'wiki/fetchDetails',
  async (_, { dispatch, rejectWithValue }) => {
    const today = new Date();
    const month = String(today.getMonth() + 1);
    const day = String(today.getDate());
    const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`;

    try {
      // const response = await fetch(url)
      //   .then((response) => response.json())
      //   .then((data) => data)
      //   .catch((error) => {
      //     console.log(error);
      //     dispatch(wikiActions.setWikiFetchState('failed'));
      //   });

      const response = await fetch(url)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('Bad response from server');
          }
          return response.json();
        })
        .then((data) => data)
        .catch((error) => console.log(error));

      dispatch(wikiActions.setWikiDetails(response));
    } catch (error: any) {
      return rejectWithValue(error?.message);
    }
  }
);
