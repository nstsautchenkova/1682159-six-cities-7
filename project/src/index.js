import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  CARDS_COUT: 5,
  RENTAL_OFFERS_COUT: 31,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      rentalOfferCout={Setting.RENTAL_OFFERS_COUT}
      cardsCout={Setting.CARDS_COUT}
    />
  </React.StrictMode>,
  document.getElementById('root'));
