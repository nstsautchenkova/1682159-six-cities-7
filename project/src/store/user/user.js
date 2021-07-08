import { createReducer } from '@reduxjs/toolkit';
import { requireAuthorization, userLogout, userEmail } from '../action.js';
import { AuthorizationStatus } from '../../const.js';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userEmail: '',
};
const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(userLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    })
    .addCase(userEmail, (state, action) => {
      state.userEmail = action.payload;
    });
});

export { user };

