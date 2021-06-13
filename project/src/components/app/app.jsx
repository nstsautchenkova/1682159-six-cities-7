import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppRoute } from '../../const.js';
import HomePage from '../home-page/home-page.jsx';
import LoginPage from '../login-page/login-page.jsx';
import FavoritesPage from '../favorites-page/favorites-page.jsx';
import RoomPage from '../room-page/room-page.jsx';
import HotFoundPage from '../not-found-page/not-found-page.jsx';
import OfferProp from '../offers-prop/offers-prop.js';

function App(props) {
  const { rentalOfferCout, offers } = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <HomePage
            rentalOfferCout={rentalOfferCout}
            offers={offers}
          />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <LoginPage />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage offers={offers} />
        </Route>
        <Route exact path={AppRoute.OFFER_$ID} component={RoomPage}>
          <RoomPage offers={offers} />
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
  offers: PropTypes.arrayOf(OfferProp).isRequired,
};
export default App;
