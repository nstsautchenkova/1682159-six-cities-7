import React from 'react';
import PropTypes from 'prop-types';
import HomePage from '../homePage/homePage.jsx';

function App(props) {
  const { rentalOfferCout, cardsCout } = props;
  return (
    <HomePage
      rentalOfferCout={rentalOfferCout}
      cardsCout={cardsCout}
    />
  );
}

App.propTypes = {
  rentalOfferCout: PropTypes.number.isRequired,
  cardsCout: PropTypes.number.isRequired,
};
export default App;
