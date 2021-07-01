import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/app/app';
import reviews from './mocks/reviews.js';
import { createAPI } from './services/api.js';
import { reducer } from './store/reducer.js';
import { ActionCreator } from './store/action.js';
import { checkAuth, fetchOffersList, fetchNearbyList } from './store/api-actions.js';
import { AuthorizationStatus } from '../src/const.js';
import { redirect } from './store/middlewares/redirect.js';

const api = createAPI(
  () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);
store.dispatch(checkAuth());
store.dispatch(fetchOffersList());
store.dispatch(fetchNearbyList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

