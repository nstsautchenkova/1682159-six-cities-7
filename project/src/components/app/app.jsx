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
import { getOfferById, isCheckedAuth } from '../../utils.js';
import { Preloader } from '../preloader/preloader.jsx';
import { AuthorizationStatus } from '../../const.js';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history.js';
import ShowAlert from '../show-alert/show-alert.jsx';
function App(props) {
  const { offers } = props;
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
            onOfferHover={onOfferHover}
            selectedOffer={selectedOffer}
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
          <RoomPage />
        </Route>
        <Route path={AppRoute.SHOW_ALERT}>
          <ShowAlert />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(offerType).isRequired,
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
