import { createReducer } from '@reduxjs/toolkit';
import { nearbyList, reviewsList, comments } from '../action.js';

const initialState = {
  nearby: [],
  comments: [],
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(nearbyList, (state, action) => {
      state.nearby = action.payload;
    })
    .addCase(reviewsList, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(comments, (state, action) => {
      state.comments = action.payload;
    });
});
export { data };
