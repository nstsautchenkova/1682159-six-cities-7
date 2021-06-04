import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppRoute } from '../../const.js';
import HomePage from '../homePage/homePage.jsx';
import LoginPage from '../loginPage/loginPage.jsx';
import FavoritesPage from '../favoritesPage/favoritesPage.jsx';
import RoomPage from '../roomPage/roomPage.jsx';
import Page404 from '../404/404.jsx';
function App(props) {
  const { rentalOfferCout, cardsCout } = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <HomePage
            rentalOfferCout={rentalOfferCout}
            cardsCout={cardsCout}
          />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <LoginPage />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage />
        </Route>
        <Route exact path="/offer/:id?" component={RoomPage} />
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  rentalOfferCout: PropTypes.number.isRequired,
  cardsCout: PropTypes.number.isRequired,
};
export default App;
