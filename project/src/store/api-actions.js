import { ActionCreator } from './action.js';
import { AuthorizationStatus, APIRoute } from '../const.js';

const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({ data }) => dispatch(ActionCreator.loadOffers(data)))
);

const fetchNearbyList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.NEARBY)
    .then(({ data }) => dispatch(ActionCreator.nearbyList(data)))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => { }) // можно создать вывод сообщения об ошибки
);

const login = ({ login: email, password }) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, { email, password })
    .then(({ data }) => localStorage.setItem('token', data.token))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);

export  { fetchOffersList, fetchNearbyList, checkAuth, login, logout };
