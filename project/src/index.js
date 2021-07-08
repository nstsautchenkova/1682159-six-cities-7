import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import App from './components/app/app';
import { createAPI } from './services/api.js';
import { requireAuthorization } from './store/action.js';
import { checkAuth, fetchOffersList } from './store/api-actions.js';
import { AuthorizationStatus } from '../src/const.js';
import { redirect } from './store/middlewares/redirect.js';
import rootReducer from './store/root-reducer';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
store.dispatch(checkAuth());
store.dispatch(fetchOffersList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

