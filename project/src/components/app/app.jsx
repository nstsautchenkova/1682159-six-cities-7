import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const.js';
import HomePage from '../home-page/home-page.jsx';
import LoginPage from '../login-page/login-page.jsx';
import FavoritesPage from '../favorites-page/favorites-page.jsx';
import RoomPage from '../room-page/room-page.jsx';
import NotFoundPage from '../not-found-page/not-found-page.jsx';
import offerType from '../offers-prop/offers-prop.js';
import сityType from '../city-prop/city-prop.js';
import { getOfferById, isCheckedAuth } from '../../utils.js';
import сitiesType from '../сities-prop/сities-prop.js';
import { Preloader } from '../preloader/preloader.jsx';
import { AuthorizationStatus } from '../../const.js';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history.js';
function App(props) {
  const { rentalOfferCout, offers, defaultCity, OfferCity } = props;
  const [selectedOffer, setSelectedOffer] = useState(null);

  const onOfferHover = (offerId) => {
    setSelectedOffer(getOfferById(offers, offerId));
  };

  const { authorizationStatus, isDataLoaded } = props;
  if (isCheckedAuth(authorizationStatus, AuthorizationStatus) || !isDataLoaded) {
    return (
      <Preloader />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <HomePage
            rentalOfferCout={rentalOfferCout}
            defaultCity={defaultCity}
            onOfferHover={onOfferHover}
            selectedOffer={selectedOffer}
            OfferCity={OfferCity}
          />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <LoginPage />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => (
            <FavoritesPage />
          )}
        />
        <Route exact path={AppRoute.OFFER_$ID} component={RoomPage}>
          <RoomPage
            defaultCity={defaultCity}
          />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  rentalOfferCout: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(offerType).isRequired,
  defaultCity: PropTypes.exact(сityType).isRequired,
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
