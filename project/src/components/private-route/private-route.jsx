import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../const.js';
import { getAuthorizationStatus } from '../../store/user/selectors.js';

function PrivateRoute(props) {
  const { render, path, exact } = props;
  const authorizationStatus = useSelector(getAuthorizationStatus);
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        authorizationStatus === AuthorizationStatus.AUTH
          ? render(routeProps)
          : <Redirect to={AppRoute.SIGN_IN} />
      )}
    />
  );
}

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
