import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers.js';
import { defaultCity } from './mocks/city.js';

const Setting = {
  RENTAL_OFFERS_COUT: 31,
};
ReactDOM.render(
  <React.StrictMode>
    <App
      rentalOfferCout={Setting.RENTAL_OFFERS_COUT}
      offers={offers}
      defaultCity={defaultCity}
    />
  </React.StrictMode>,
  document.getElementById('root'));

