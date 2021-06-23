import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppRoute } from '../../const.js';
import HomePage from '../home-page/home-page.jsx';
import LoginPage from '../login-page/login-page.jsx';
import FavoritesPage from '../favorites-page/favorites-page.jsx';
import RoomPage from '../room-page/room-page.jsx';
import HotFoundPage from '../not-found-page/not-found-page.jsx';
import offerType from '../offers-prop/offers-prop.js';
import reviewsType from '../reviews-props/reviews-props.js';
import cityType from '../city-prop/city-prop.js';
import { getOfferById } from '../../utils.js';
function App(props) {
  const { rentalOfferCout, offers, defaultCity, reviews } = props;
  const [selectedOffer, setSelectedOffer] = useState(null);

  const onOfferHover = (offerId) => {
    setSelectedOffer(getOfferById(offers, offerId));
  };
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <HomePage
            rentalOfferCout={rentalOfferCout}
            offers={offers}
            defaultCity={defaultCity}
            onOfferHover={onOfferHover}
            selectedOffer={selectedOffer}
          />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <LoginPage />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage offers={offers} />
        </Route>
        <Route exact path={AppRoute.OFFER_$ID} component={RoomPage}>
          <RoomPage
            offers={offers}
            reviews={reviews}
            defaultCity={defaultCity}
          />
        </Route>
        <Route>
          <HotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  rentalOfferCout: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(offerType).isRequired,
  defaultCity: PropTypes.exact(cityType).isRequired,
  reviews: PropTypes.arrayOf(reviewsType).isRequired,
};
export default App;
