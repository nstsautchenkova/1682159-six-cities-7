import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppRoute } from '../../const.js';
import HomePage from '../home-page/home-page.jsx';
import LoginPage from '../login-page/login-page.jsx';
import FavoritesPage from '../favorites-page/favorites-page.jsx';
import RoomPage from '../room-page/room-page.jsx';
import HotFoundPage from '../not-found-page/not-found-page.jsx';
import offerType from '../offers-prop/offers-prop.js';
import reviewsType from '../reviews-props/reviews-props.js';
import сityType from '../city-prop/city-prop.js';
import { getOfferById } from '../../utils.js';
import сitiesType from '../сities-prop/сities-prop.js';
import { Preloader } from '../preloader/preloader.jsx';
import { AuthorizationStatus } from '../../const.js';
function App(props) {
  const { rentalOfferCout, offers, defaultCity, reviews, OfferCity } = props;
  const [selectedOffer, setSelectedOffer] = useState(null);

  const onOfferHover = (offerId) => {
    setSelectedOffer(getOfferById(offers, offerId));
  };

  const { authorizationStatus, isDataLoaded } = props;
  const isCheckedAuth = (status) => status === AuthorizationStatus.UNKNOWN;
  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <Preloader />
    );
  }

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
            OfferCity={OfferCity}
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
  defaultCity: PropTypes.exact(сityType).isRequired,
  reviews: PropTypes.arrayOf(reviewsType).isRequired,
  OfferCity: PropTypes.exact(сitiesType).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
  offers: state.offers,
});
//export default App;
export default connect(mapStateToProps, null)(App);
