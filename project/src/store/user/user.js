import { createReducer } from '@reduxjs/toolkit';
import { requireAuthorization, userLogout } from '../action.js';
import { AuthorizationStatus } from '../../const.js';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};
const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(userLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    });
});

export { user };

