import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import offers from './mocks/offers.js';
import reviews from './mocks/reviews.js';
import { defaultCity } from './mocks/default-city.js';
import { OfferCity } from '../src/const.js';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        defaultCity={defaultCity}
        reviews={reviews}
        OfferCity={OfferCity}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

